import AlertSystem from "../AlertSystem";

export default function TitledPage({ className, title, children }) {
  return (
    <div className={`${className} d-flex flex-column`} style={{ flex: 1 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <hr />
        {children}
      </div>
    </div>
  );
}
