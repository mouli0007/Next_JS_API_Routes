
#### API  Routes Pre-Rendering #######

We have to make the datas pre rendered with getStaticPrps rather than using useEffect
to achive pre rendering 

const Feedback = (props) => {
  return (
    <div>
      <FeedBack />
      <br />
      <br />
      {props.feedback.map((item) => {
        return (
          <div key={item.id}>
            <h3>Email : {item.email}</h3>
            <h3>Text : {item.text}</h3>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedback_();
  const data = extractFeedback_(filePath);

  return {
    props: {
      feedback: data,
    },
  };
};
