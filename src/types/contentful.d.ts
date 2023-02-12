// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPostFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Date and time */
  dateAndTime: string;

  /** Body */
  body: Document;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectsFields {
  /** Title */
  title: string;

  /** Image */
  image: Asset;

  /** Description */
  description: string;

  /** Tags */
  tags: string[];

  /** Repository Link */
  repositoryLink?: string | undefined;

  /** Live-view Link */
  liveViewLink?: string | undefined;
}

export interface IProjects extends Entry<IProjectsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "projects";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "post" | "projects";

export type IEntry = IPost | IProjects;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
