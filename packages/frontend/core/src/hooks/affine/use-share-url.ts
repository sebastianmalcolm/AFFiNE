import { notify } from '@affine/component';
import { track } from '@affine/core/mixpanel';
import { getAffineCloudBaseUrl } from '@affine/core/modules/cloud/services/fetch';
import { useI18n } from '@affine/i18n';
import type { Disposable } from '@blocksuite/global/utils';
import type { DocMode } from '@toeverything/infra';
import { useCallback, useEffect, useState } from 'react';

import { useActiveBlocksuiteEditor } from '../use-block-suite-editor';

type UrlType = 'public' | 'private';

type UseSharingUrl = {
  workspaceId: string;
  pageId: string;
  urlType: UrlType;
  shareView?: DocMode;
};

const generateUrl = ({
  workspaceId,
  pageId,
  blockId,
  shareView,
}: UseSharingUrl & { blockId?: string }) => {
  // to generate a private url like https://app.affine.app/workspace/123/456
  // or https://app.affine.app/workspace/123/456#block-123

  // to generate a public url like https://app.affine.app/share/123/456
  const baseUrl = getAffineCloudBaseUrl();
  if (!baseUrl) return null;

  try {
    return new URL(
      `${baseUrl}/workspace/${workspaceId}/${pageId}${shareView ? `?view=${shareView}` : ''}${blockId ? `#${blockId}` : ''}`
    ).toString();
  } catch (e) {
    return null;
  }
};

export const useSharingUrl = ({
  workspaceId,
  pageId,
  urlType,
}: UseSharingUrl) => {
  const t = useI18n();
  const [blockId, setBlockId] = useState<string>('');
  const [editor] = useActiveBlocksuiteEditor();

  const onClickCopyLink = useCallback(
    (view: DocMode) => {
      const sharingUrl = generateUrl({
        workspaceId,
        pageId,
        urlType,
        blockId: blockId.length > 0 ? blockId : undefined,
        shareView: view,
      });
      if (sharingUrl) {
        navigator.clipboard
          .writeText(sharingUrl)
          .then(() => {
            notify.success({
              title: t['Copied link to clipboard'](),
            });
          })
          .catch(err => {
            console.error(err);
          });
        track.$.sharePanel.$.copyShareLink({
          type: urlType,
        });
      } else {
        notify.error({
          title: 'Network not available',
        });
      }
    },
    [workspaceId, pageId, urlType, blockId, t]
  );

  useEffect(() => {
    let disposable: Disposable | null = null;
    const selectManager = editor?.host?.selection;
    if (!selectManager) {
      return;
    }

    // if the block is already selected, set the blockId
    const currentBlockSelection = selectManager.find('block');
    if (currentBlockSelection) {
      setBlockId(currentBlockSelection.blockId);
    }

    disposable = selectManager.slots.changed.on(selections => {
      setBlockId(prev => {
        if (selections[0] && selections[0].type === 'block') {
          return selections[0].blockId;
        } else if (prev.length > 0) {
          return '';
        } else {
          return prev;
        }
      });
    });
    return () => {
      disposable?.dispose();
    };
  }, [editor?.host?.selection, urlType]);
  return {
    onClickCopyLink,
  };
};
