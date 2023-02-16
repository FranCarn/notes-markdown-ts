import { NoteForm } from "../../components/NoteForm";
import { useNote } from "../../hooks/useNote";
import { EditNoteProps } from "./types/EditNoteProps";

export const EditNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: EditNoteProps) => {
  const { title, tags, id, markdown } = useNote();
  return (
    <>
      <h1 className="mb-4">EditNote</h1>
      <NoteForm
        title={title}
        tags={tags}
        markdown={markdown}
        onSubmit={(data) => onSubmit(id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
