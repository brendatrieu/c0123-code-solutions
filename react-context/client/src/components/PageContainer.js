import './PageContainer.css';

export default function PageContainer({ children }) {
  return (
    <div className="bg-light">
      <div className="page container">
        {children}
      </div>
    </div>
  );
}
