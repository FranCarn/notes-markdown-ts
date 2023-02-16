import { ReactEventHandler, ReactInstance } from "react";
import { NoteListProps } from "./NoteListProps";
import { Tag } from "../../../types/Tag";

export type EditTagsModalProps = {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => void;
} & NoteListProps;
