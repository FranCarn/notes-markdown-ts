import React from "react";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { useNote } from "./utils/useNote";

export const Note = () => {
  const { title, tags, id, markdown } = useNote();
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{title}</h1>
          {tags.length && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag.id} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="outline-danger">Delete</Button>
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
