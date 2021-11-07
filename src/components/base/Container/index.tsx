import "./styles.scss";

type BaseContainerProps = {
  children: React.ReactNode[];
};

export default function (props: BaseContainerProps) {
  return <div className="container">{props.children}</div>;
}
