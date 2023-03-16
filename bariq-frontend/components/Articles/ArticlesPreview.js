import styled from "styled-components";
import {secondsToStringDate} from "../../util/format";
import {useState} from "react";

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

const BlankArticlePreview = styled(ArticlePreview)`
  color: transparent;
  user-select: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`

const FilterWrapper = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  background: #d9dee1;
  padding: 20px;
  border-radius: 20px;
  margin-top: 10px;
  height: fit-content;
`

const FilterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const FilterItem = styled.li`
  margin-bottom: 5px;
`

const FilterLabel = styled.label`
    margin-left: 10px;
`;

const FilterTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`


function contentToPreview(content) {
    let preview = content.substring(0, 200);
    if (content.length > 200) {
        preview += "...";
    }
    return preview;
}

function ArticleComponent(props) {
    let router = props.router
    let data = props.data
    let categoriesMap = props.categories
    let [selectedCategories, setSelectedCategories] = useState(new Set());
    let items = []
    let articleToCategories = new Map();
    if (data.size === 0) {
        items.push(
            <div>
                <ArticleItem>
                    <ArticleTitle>No articles found</ArticleTitle>
                    <BlankArticlePreview>As a beer warehouse distributor, managing your inventory efficiently can be a daunting task. However, with Bar IQ, our state-of-the-art beer inventory management software, you can streamline your inve...</BlankArticlePreview>
                </ArticleItem>
            </div>
        )
    }
    data.forEach((value, key) => {
        articleToCategories.set(key, value.categories);
        items.push(<div key={key} onClick={() => {
            router.push(`/help/${key}`);
        }}>
            <ArticleItem>
                <ArticleTitle>{value.title}</ArticleTitle>
                <ArticleDate>{secondsToStringDate(value.date.seconds)}</ArticleDate>
                <ArticlePreview>{contentToPreview(value.content)}</ArticlePreview>
            </ArticleItem>
        </div>)
    });

    // Sort items by date
    items.sort((a, b) => {
        let dateA = new Date(a.props.children.props.children[1].props.children);
        let dateB = new Date(b.props.children.props.children[1].props.children);
        return dateB - dateA;
    })

    let categories = []
    categoriesMap.forEach((value, key) => {
        categories.push(<FilterItem key={key}>
            <input type="checkbox" id={key} name={value} value={value} onChange={(event) => {
                const newSet = new Set(selectedCategories);
                if (event.target.checked) {
                    newSet.add(parseInt(event.target.id));
                } else {
                    newSet.delete(parseInt(event.target.id));
                }
                setSelectedCategories(newSet);
            }}/>
            <FilterLabel htmlFor={key}>{value}</FilterLabel>
        </FilterItem>)
    });

    return (<Wrapper>
        <FilterWrapper>
            <FilterList>
                <FilterTitle>Filter by Category</FilterTitle>
                {categories}
            </FilterList>
        </FilterWrapper>
        <ArticleList>
            {items.filter(item => {
                if (selectedCategories.size === 0) {
                    return true;
                }
                let result = false;
                selectedCategories.forEach(id1 => {
                    articleToCategories.get(item.key).forEach(id2 => {
                        console.log(id1, id2)
                        if (id1 === id2) {
                            result = true;
                        }
                    });
                });
                return result;
            })}
        </ArticleList>
    </Wrapper>);
}

export default ArticleComponent;