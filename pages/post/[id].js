import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
`;
const BackBtn = styled.a`
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260a1;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
  outline: none;
  width: 117px;
  height: 45px;
  :hover {
    box-shadow: 0px 0px 35px rgba(148, 174, 213, 1);
    transition: 0.3s all ease;
  }
`;
const PostWrapper = styled.div`
  display: flex;
  background: #fefefe;
  border-radius: 15px;
  margin-top: 50px;
  position:relative;
`;
const PostItem = styled.div`
  display: flex;
  flex-derection: column;
  flex: 0 0 50%;
  justify-content: center;
  padding: 35px;
`;
const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 25px;
`;
const PostText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;
const RemovePostBtn = styled.a`
font-style: normal; 
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
background: #EB5050;
box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
border-radius: 10px;
position: absolute;
width: 139px;
height: 25px;
left:50%;
bottom:-15px;
display:flex;
justify-content:center;
align-items:center;
transform:translate(-50%);
cursor:pointer;
`

export default function Post() {
  return (
    <Wrapper>
      <Head>
        <title>NEXT BLOG | POST </title>
      </Head>
      <Navbar />
      <div className="container">
          <Link href='/'>
          <BackBtn>
          <Image
            src="/static/images/Vector.png"
            alt="Picture of the author"
            width={24}
            height={15}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          ??????????
        </BackBtn>
          </Link>
        
        <PostWrapper>
          <PostItem>??????????. ???????????? ?????????????? ?? ???????? ! </PostItem>
          <PostText>
            ???????????? (????. Alpes, ??????. Alpen, ????????. Alpi, ????????????. Alps, ????????????.
            Alpe) ??? ?????????? ?????????????? ?? ?????????????????????? ???????????? ???????????? ?????????? ????????????,
            ?????????????? ?????????????? ?? ????????????. ?????? ???????? ???????????????????? ???????? ????????, ?? ??????????????????
            ??? ??????????????????????, ???? ?????? ?????????? ?????????? ?? ???? ???????????????????? ???????? (??
            ?????????????????????? ???? ???????????????????? ?????????????????????? ?????????????? ?????????? ?????????????? ??
            ??????????). ?????????? ???????????????????????? ?????????? ?????????????? ?????????????? ?????????????? ?? ????????????????,
            ?????????????????????????? ???????????????? ?? ????????????-???????????? ?????????? ???? ???????????????????????? ???????? ????
            ?????????????????????????????? ??????????????????????. ?????????? ?????????????????????????? ???? ???????????????????? 8
            ??????????: ??????????????, ????????????, ????????????, ??????????????????, ????????????????, ??????????????,
            ???????????????????????? ?? ????????????????. ?????????? ?????????? ???????????????????? ???????? ????????????????????
            ?????????? 1200 ???? (???? ?????????????????????? ???????? ???????? ??? ?????????? 750 ????), ???????????? ??? ????
            260 ????. ?????????? ?????????????? ???????????????? ???????? ???????????????? ???????? ?????????????? ??????????????
            4810 ???????????? ?????? ?????????????? ????????, ?????????????????????????? ???? ?????????????? ?????????????? ??
            ????????????[1]. ?????????? ?? ???????????? ?????????????????????????? ?????????? 100
            ????????????-??????????????????????????????????[2].
          </PostText>
          <PostItem>
            <Image
              src="/static/images/7.jpg"
              alt="Picture of the author"
              width={540}
              height={316}
            />
          </PostItem>
          <RemovePostBtn>
          ?????????????? ????????????
          </RemovePostBtn>
        </PostWrapper>
      </div>
    </Wrapper>
  );
}
