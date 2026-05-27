import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceService extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface StatisticMetric extends Struct.ComponentSchema {
  collectionName: 'components_statistic_metrics';
  info: {
    displayName: 'metric';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service.service': ServiceService;
      'statistic.metric': StatisticMetric;
    }
  }
}
