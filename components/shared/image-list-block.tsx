type Props = {
  children: React.ReactNode;
  phrase: string;
  listItems: string[];
};

const ImageListBlock = ({ children, phrase, listItems }: Props) => {
  return (
    <article>
      {children}
      <p>{phrase}</p>

      <ul>
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default ImageListBlock;
