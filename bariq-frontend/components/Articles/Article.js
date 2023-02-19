import styled from "styled-components";
import {secondsToStringDate} from "../../util/format";

const ArticleWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ArticleTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ArticleDate = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #999;
`

const ArticleContentWrapper = styled.div`
  font-size: 18px;
  line-height: 1.5;
`;

const ArticleContent = styled.p`
  margin-bottom: 20px;
`;

function ArticleComponent(props) {
    let data = props.data

    return (
        <ArticleWrapper>
            <ArticleTitle>{data.title}</ArticleTitle>
            <ArticleDate>{secondsToStringDate(data.date.seconds)}</ArticleDate>
            <ArticleContentWrapper>
                {data.content.split("\\n").map((item, key) => {
                    return <ArticleContent key={key}>{item}</ArticleContent>
                })}
            </ArticleContentWrapper>
        </ArticleWrapper>
    );
}

export default ArticleComponent;