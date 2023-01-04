import { CommentStyle, P50B1 } from '../Style/style';

interface Type {
    content: never,
    key: number
}

export const CockflowCommentDepth = ({ content }: Type) => {
    return (
        <P50B1>
            <CommentStyle readOnly={true}>{content}</CommentStyle>
        </P50B1>
    );
};