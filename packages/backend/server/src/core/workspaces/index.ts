import { Module } from '@nestjs/common';

import { DocModule } from '../doc';
import { FeatureModule } from '../features';
import { PermissionModule } from '../permission';
import { QuotaModule } from '../quota';
import { StorageModule } from '../storage';
import { UserModule } from '../user';
import { WorkspacesController } from './controller';
import { WorkspaceManagementResolver } from './management';
import {
  DocHistoryResolver,
  PagePermissionResolver,
  WorkspaceBlobResolver,
  WorkspaceResolver,
} from './resolvers';

@Module({
  imports: [
    DocModule,
    FeatureModule,
    QuotaModule,
    StorageModule,
    UserModule,
    PermissionModule,
  ],
  controllers: [WorkspacesController],
  providers: [
    WorkspaceResolver,
    WorkspaceManagementResolver,
    PagePermissionResolver,
    DocHistoryResolver,
    WorkspaceBlobResolver,
  ],
})
export class WorkspaceModule {}

export type { InvitationType, WorkspaceType } from './types';
