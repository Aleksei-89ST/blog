import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
`;
const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`;
const Post = styled.a`
  width: 350px;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background: url("${(props) => props.bgImage}") center / cover no-repeat;
  :hover {
    transform:scale(1.1);
    transition: 3s all ease;
  }
`;
const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 0px 0px 15px 15px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <Wrapper>
        <div className="container">
          <PostWrapper>
            <Link href={'/post/[id]'} as={`/post/test-route `}>
            <Post bgImage={"./static/images/1.png"}>
              <PostTitle>Мальдивы. Рай или пафос ?</PostTitle>
            </Post>
            </Link>
           
            <Post bgImage={"./static/images/2.png"}>
              <PostTitle>Италия. Остров Капри. Обзор. </PostTitle>
            </Post>
            <Post bgImage={"./static/images/3.png"}>
              <PostTitle>США. Сан-Франциско,  дорого ?</PostTitle>
            </Post>
            <Post bgImage={"./static/images/4.png"}>
              <PostTitle>Канада. Пейзажи вблизи Онтарио.</PostTitle>
            </Post>
            <Post bgImage={"./static/images/5.png"}>
              <PostTitle>Швейцария.  Красота природы.</PostTitle>
            </Post>
            <Post bgImage={"./static/images/6.png"}>
              <PostTitle>Альпы.  Покори вершину с нами !</PostTitle>
            </Post>
          </PostWrapper>
        </div>
      </Wrapper>
    </div>
  );
}
