import { useState } from "react";
import {
  Comment,
  Form,
  Button,
  Card,
  Divider,
  Icon,
  Input,
  Select,
} from "semantic-ui-react";

export const PostCard = (props) => {
  const { post } = props;
  const [open, setOpen] = useState(false);
  return (
    <Card fluid>
      <Card.Content>
        <Comment.Group>
          <Comment>
            {/* <Comment.Avatar src="/images/avatar/small/matt.jpg" /> */}
            <Comment.Content>
              <Comment.Author as="a">{post.user_name}</Comment.Author>
              <Comment.Metadata>
                <div>{post.created_at}</div>
              </Comment.Metadata>
              <Comment.Text>{post.post_text}</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        {open ? (
          <>
            <p style={{ textAlign: "center" }}>
              <span onClick={() => setOpen(false)}>
                質問を閉じる <Icon name="angle up" />
              </span>
            </p>

            <Comment.Group>
              {post.question_list.map((question) => (
                <Comment key={question.id}>
                  {/* <Comment.Avatar src="/images/avatar/small/elliot.jpg" /> */}
                  <Comment.Content>
                    <Comment.Author as="a">社員の人</Comment.Author>
                    <Comment.Metadata>
                      <div>{question.created_at}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>{question.question_text}</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                  <Comment.Group>
                    {question.reply_list.map((reply) => (
                      <Comment>
                        {/* <Comment.Avatar src="/images/avatar/small/jenny.jpg" /> */}
                        <Comment.Content>
                          <Comment.Author as="a">社員の人</Comment.Author>
                          <Comment.Metadata>
                            <div>{reply.created_at}</div>
                          </Comment.Metadata>
                          <Comment.Text>{reply.reply_text}</Comment.Text>
                          <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    ))}
                  </Comment.Group>
                </Comment>
              ))}
              <Form reply>
                <Input
                  type="text"
                  placeholder="Search..."
                  action
                  size="mini"
                  fluid
                >
                  <input placeholder="質問内容を入力してください" />
                  <Button type="submit" size="mini" primary>
                    質問する
                  </Button>
                </Input>
              </Form>
            </Comment.Group>
          </>
        ) : (
          <p style={{ textAlign: "center" }}>
            <span onClick={() => setOpen(true)}>
              1件の質問
              <Icon name="angle down" />
            </span>
          </p>
        )}
      </Card.Content>
    </Card>
  );
};
