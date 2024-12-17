type GreetProps = {
  name: string;
  MessageCount: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.MessageCount} New messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
