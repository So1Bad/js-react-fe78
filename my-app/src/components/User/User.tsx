type Props = {
   username: string
}
export const User = ({ username }: Props) => {
   return <>
      <p>{username}</p>
   </>
}