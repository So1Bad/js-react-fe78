import styled from "styled-components"

type Props = {
   title: string
}
export const Title = ({ title }: Props) => {
   return <StyledTitle>{title}</StyledTitle>
}

const StyledTitle = styled.h1`
font-size: 50px;
font-weight: 900;
margin-bottom:20px;
`
