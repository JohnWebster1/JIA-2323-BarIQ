import styled from "styled-components";
import {secondsToStringDate} from "../util/format";

const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  width: 61.8%;
  padding: 0;
`;

const ArticleItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
`;

const ArticleTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`

const ArticleDate = styled.p`
  color: #888;
  font-size: 0.8rem;
  margin-bottom: 10px;
`

const ArticlePreview = styled.p`
  font-size: 1rem;
`;

function contentToPreview(content) {
    let preview = content.substring(0, 200);
    if (content.length > 200) {
        preview += "...";
    }
    return preview;
}

function ArticleComponent(props) {
    let router = props.router;
    let data = props.data
    let items = []
    data.forEach((value, key) => {
        items.push(
            <div key={key} onClick={
                () => {
                    router.push(`/help/${key}`);
                }
            }>
                <ArticleItem>
                    <ArticleTitle>{value.title}</ArticleTitle>
                    <ArticleDate>{secondsToStringDate(value.date.seconds)}</ArticleDate>
                    <ArticlePreview>{contentToPreview(value.content)}</ArticlePreview>
                </ArticleItem>
            </div>
        )
    });

    // Sort items by date
    items.sort((a, b) => {
        let dateA = new Date(a.props.children.props.children[1].props.children);
        let dateB = new Date(b.props.children.props.children[1].props.children);
        return dateB - dateA;
    })

    return (
        <ArticleList>
            {items}
        </ArticleList>
    );
}

export default ArticleComponent;