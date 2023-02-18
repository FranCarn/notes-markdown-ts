import { NoteForm } from "../../components/NoteForm";
import { useNote } from "../../hooks/useNote";
import { NoteData, Tag } from "../../models";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

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
        onSubmit={(data: NoteData) => onSubmit(id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
