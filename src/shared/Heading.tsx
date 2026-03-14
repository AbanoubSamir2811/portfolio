type Props = {
  title: string;
};
function Heading({title}: Props) {
    return (
        <>
        <h2 className='heading'>{title}</h2>
        </>
      )
}

export default Heading