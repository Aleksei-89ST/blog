import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
  padding-bottom:100px;
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
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`;
const InputField = styled.div`
  display: flex;
  flex-derection: column;
  margin-bottom: 15px;
`;
const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
`;
const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
  color: #222222;
`;
const TextArea = styled.textarea`
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  min-height: 150px;
  resize: none;
  outline: none;
  padding: 5px 10px;
  margin-bottom: 5px;
`;
const FormBtn = styled.button`
  width: 139px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #67bfff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  border:none;
  margin: 0 auto;
  margin-top: 15px;
  cursor:pointer;
`;
export default function AddPost() {
  return (
    <Wrapper>
      <Head>
        <title>NEXT BLOG | ???????????????? ???????? </title>
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
        
        <FormWrapper>
          <Form>
            <InputField>
              <TextLabel>???????????????? ????????????:</TextLabel>
              <Input />
            </InputField>

            <InputField>
              <TextLabel>?????????? ????????????:</TextLabel>
              <TextArea />
            </InputField>

            <InputField>
              <TextLabel>URL ????????????????:</TextLabel>
              <Input />
            </InputField>
            <FormBtn>????????????????</FormBtn>
          </Form>
        </FormWrapper>
      </div>
    </Wrapper>
  );
}
