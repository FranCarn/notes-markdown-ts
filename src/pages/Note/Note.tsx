import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "../../hooks/useNote";
import { Tag } from "../../models";

type NoteProps = {
  onDelete: (id: string) => void;
};

export const Note = ({ onDelete }: NoteProps) => {
  const { title, tags, id, markdown } = useNote();
  const navigate = useNavigate();
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{title}</h1>
          {tags.length && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {tags.map((tag: Tag) => (
                <Badge
                  key={tag.id}
                  className="text-truncate bg-light text-dark"
                >
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${id}/edit`}>
              <Button variant="outline-light">Edit</Button>
            </Link>
            <Button
              variant="outline-danger"
              onClick={() => {
                onDelete(id);
                navigate("/");
              }}
            >
              Delete
            </Button>
            <Link to="..">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};
