/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateRequest($contact: String!, $description: String) {\n  createRequest(data: {contact: $contact, description: $description}) {\n    data {\n      id\n      attributes {\n        description\n        contact\n      }\n    }\n  }\n}": types.CreateRequestDocument,
    "mutation CreateUser($input: UsersPermissionsRegisterInput!) {\n  register(input: $input) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}": types.CreateUserDocument,
    "mutation Login($input: UsersPermissionsLoginInput!) {\n  login(input: $input) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}": types.LoginDocument,
    "mutation CreateResumeItem {\n  createResumeItem(\n    data: {education: {id: \"\"}, employment: {id: \"\"}, course: {id: \"\"}, languages: {id: \"\"}, links: {id: \"\"}, titles: {id: \"\"}}\n  ) {\n    data {\n      id\n    }\n  }\n}": types.CreateResumeItemDocument,
    "mutation UpdateResumeItem($data: ResumeItemInput!, $id: ID!) {\n  updateResumeItem(data: $data, id: $id) {\n    data {\n      attributes {\n        slug\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n        contact {\n          id\n          job\n          firstName\n          lastName\n          email\n          phone\n          country\n          city\n        }\n        languages {\n          id\n          languagesName\n          languagesLevel\n        }\n        secondaryColor\n        primaryColor\n        design\n        summary\n        skills\n        titles {\n          link\n          id\n          skills\n          summary\n          personal\n          education\n          employment\n          course\n          languages\n        }\n        employment {\n          id\n          job\n          employer\n          city\n          description\n          startDate\n          endDate\n        }\n        course {\n          id\n          school\n          degree\n          specialty\n          description\n          city\n          startDate\n          endDate\n          uuid\n        }\n        education {\n          id\n          school\n          degree\n          specialty\n          description\n          startDate\n          startDate\n          endDate\n          uuid\n        }\n        links {\n          id\n          label\n          link\n        }\n      }\n    }\n  }\n}": types.UpdateResumeItemDocument,
    "query Home($locale: I18NLocaleCode) {\n  templates(locale: $locale) {\n    data {\n      attributes {\n        link\n        title\n        description\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n  advantages(locale: $locale) {\n    data {\n      attributes {\n        title\n        description\n        icon {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.HomeDocument,
    "query ResumeTemplates($locale: I18NLocaleCode, $link: String) {\n  templates(filters: {link: {eq: $link}}, locale: $locale) {\n    data {\n      attributes {\n        link\n        title\n        description\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n  allFilters: templates(sort: \"id\") {\n    data {\n      attributes {\n        link\n      }\n    }\n  }\n}": types.ResumeTemplatesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateRequest($contact: String!, $description: String) {\n  createRequest(data: {contact: $contact, description: $description}) {\n    data {\n      id\n      attributes {\n        description\n        contact\n      }\n    }\n  }\n}"): (typeof documents)["mutation CreateRequest($contact: String!, $description: String) {\n  createRequest(data: {contact: $contact, description: $description}) {\n    data {\n      id\n      attributes {\n        description\n        contact\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($input: UsersPermissionsRegisterInput!) {\n  register(input: $input) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"): (typeof documents)["mutation CreateUser($input: UsersPermissionsRegisterInput!) {\n  register(input: $input) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: UsersPermissionsLoginInput!) {\n  login(input: $input) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"): (typeof documents)["mutation Login($input: UsersPermissionsLoginInput!) {\n  login(input: $input) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateResumeItem {\n  createResumeItem(\n    data: {education: {id: \"\"}, employment: {id: \"\"}, course: {id: \"\"}, languages: {id: \"\"}, links: {id: \"\"}, titles: {id: \"\"}}\n  ) {\n    data {\n      id\n    }\n  }\n}"): (typeof documents)["mutation CreateResumeItem {\n  createResumeItem(\n    data: {education: {id: \"\"}, employment: {id: \"\"}, course: {id: \"\"}, languages: {id: \"\"}, links: {id: \"\"}, titles: {id: \"\"}}\n  ) {\n    data {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateResumeItem($data: ResumeItemInput!, $id: ID!) {\n  updateResumeItem(data: $data, id: $id) {\n    data {\n      attributes {\n        slug\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n        contact {\n          id\n          job\n          firstName\n          lastName\n          email\n          phone\n          country\n          city\n        }\n        languages {\n          id\n          languagesName\n          languagesLevel\n        }\n        secondaryColor\n        primaryColor\n        design\n        summary\n        skills\n        titles {\n          link\n          id\n          skills\n          summary\n          personal\n          education\n          employment\n          course\n          languages\n        }\n        employment {\n          id\n          job\n          employer\n          city\n          description\n          startDate\n          endDate\n        }\n        course {\n          id\n          school\n          degree\n          specialty\n          description\n          city\n          startDate\n          endDate\n          uuid\n        }\n        education {\n          id\n          school\n          degree\n          specialty\n          description\n          startDate\n          startDate\n          endDate\n          uuid\n        }\n        links {\n          id\n          label\n          link\n        }\n      }\n    }\n  }\n}"): (typeof documents)["mutation UpdateResumeItem($data: ResumeItemInput!, $id: ID!) {\n  updateResumeItem(data: $data, id: $id) {\n    data {\n      attributes {\n        slug\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n        contact {\n          id\n          job\n          firstName\n          lastName\n          email\n          phone\n          country\n          city\n        }\n        languages {\n          id\n          languagesName\n          languagesLevel\n        }\n        secondaryColor\n        primaryColor\n        design\n        summary\n        skills\n        titles {\n          link\n          id\n          skills\n          summary\n          personal\n          education\n          employment\n          course\n          languages\n        }\n        employment {\n          id\n          job\n          employer\n          city\n          description\n          startDate\n          endDate\n        }\n        course {\n          id\n          school\n          degree\n          specialty\n          description\n          city\n          startDate\n          endDate\n          uuid\n        }\n        education {\n          id\n          school\n          degree\n          specialty\n          description\n          startDate\n          startDate\n          endDate\n          uuid\n        }\n        links {\n          id\n          label\n          link\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Home($locale: I18NLocaleCode) {\n  templates(locale: $locale) {\n    data {\n      attributes {\n        link\n        title\n        description\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n  advantages(locale: $locale) {\n    data {\n      attributes {\n        title\n        description\n        icon {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Home($locale: I18NLocaleCode) {\n  templates(locale: $locale) {\n    data {\n      attributes {\n        link\n        title\n        description\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n  advantages(locale: $locale) {\n    data {\n      attributes {\n        title\n        description\n        icon {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ResumeTemplates($locale: I18NLocaleCode, $link: String) {\n  templates(filters: {link: {eq: $link}}, locale: $locale) {\n    data {\n      attributes {\n        link\n        title\n        description\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n  allFilters: templates(sort: \"id\") {\n    data {\n      attributes {\n        link\n      }\n    }\n  }\n}"): (typeof documents)["query ResumeTemplates($locale: I18NLocaleCode, $link: String) {\n  templates(filters: {link: {eq: $link}}, locale: $locale) {\n    data {\n      attributes {\n        link\n        title\n        description\n        image {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n  allFilters: templates(sort: \"id\") {\n    data {\n      attributes {\n        link\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;