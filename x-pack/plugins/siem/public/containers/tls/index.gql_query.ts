/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import gql from 'graphql-tag';

export const tlsQuery = gql`
  query GetTlsQuery(
    $sourceId: ID!
    $filterQuery: String
    $flowTarget: FlowTarget!
    $ip: String!
    $pagination: PaginationInput!
    $sort: TlsSortField!
    $timerange: TimerangeInput!
  ) {
    source(id: $sourceId) {
      id
      Tls(
        filterQuery: $filterQuery
        flowTarget: $flowTarget
        ip: $ip
        pagination: $pagination
        sort: $sort
        timerange: $timerange
      ) {
        totalCount
        edges {
          node {
            _id
            alternativeNames
            commonNames
            ja3
            issuerNames
            notAfter
          }
          cursor {
            value
          }
        }
        pageInfo {
          endCursor {
            value
          }
          hasNextPage
        }
      }
    }
  }
`;
