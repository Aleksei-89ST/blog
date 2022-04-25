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
          Назад
        </BackBtn>
          </Link>
        
        <PostWrapper>
          <PostItem>Альпы. Покори вершину с нами ! </PostItem>
          <PostText>
            А́льпы (фр. Alpes, нем. Alpen, итал. Alpi, романш. Alps, словен.
            Alpe) — самый высокий и протяжённый горный хребет среди систем,
            целиком лежащих в Европе. При этом Кавказские горы выше, а Уральские
            — протяжённей, но они лежат также и на территории Азии (в
            зависимости от выбранного определения границы между Европой и
            Азией). Альпы представляют собой сложную систему хребтов и массивов,
            протянувшуюся выпуклой к северо-западу дугой от Лигурийского моря до
            Среднедунайской низменности. Альпы располагаются на территории 8
            стран: Франции, Монако, Италии, Швейцарии, Германии, Австрии,
            Лихтенштейна и Словении. Общая длина альпийской дуги составляет
            около 1200 км (по внутреннему краю дуги — около 750 км), ширина — до
            260 км. Самой высокой вершиной Альп является гора Монблан высотой
            4810 метров над уровнем моря, расположенная на границе Франции и
            Италии[1]. Всего в Альпах сосредоточено около 100
            вершин-четырёхтысячников[2].
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
          Удалить статью
          </RemovePostBtn>
        </PostWrapper>
      </div>
    </Wrapper>
  );
}