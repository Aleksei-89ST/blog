import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "../components/Navbar";

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
font-style:normal;
font-wight:300;
font-size:18px;
line-height:21px;
color:#222222
margin-bottom:5px;
`;
export default function AddPost() {
  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <div className="container">
        <BackBtn>
          <Image
            src="/static/images/Vector.svg"
            alt="Picture of the author"
            width={24}
            height={15}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          Назад
        </BackBtn>
        <FormWrapper>
          <Form>
            <InputField>
              <TextLabel>
                <Input></Input>
              </TextLabel>
            </InputField>
          </Form>
        </FormWrapper>
      </div>
    </Wrapper>
  );
}
