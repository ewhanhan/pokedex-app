interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className="relative mx-auto h-screen 2xl:container">{children}</div>
  );
}
