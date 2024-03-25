import type { Schema, Attribute } from '@strapi/strapi';

export interface DsfadfSdff extends Schema.Component {
  collectionName: 'components_dsfadf_sdffs';
  info: {
    displayName: 'sdff';
    icon: '';
    description: '';
  };
  attributes: {
    ghdfg: Attribute.Media;
    name: Attribute.String;
    sdaf: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dsfadf.sdff': DsfadfSdff;
    }
  }
}
