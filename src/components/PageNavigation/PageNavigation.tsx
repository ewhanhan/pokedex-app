interface PageNavigationProps {
  setPageOffset: React.Dispatch<React.SetStateAction<number>>;
  offSet: number;
}

enum PageNavigationType {
  Prev,
  Next,
}

interface PageNavigationButtonProps {
  text: string;
  type: PageNavigationType;
  setPageOffset: React.Dispatch<React.SetStateAction<number>>;
}

function PageNavigationButton({
  text,
  setPageOffset,
  type,
}: PageNavigationButtonProps) {
  const buttonHandler = () => {
    setPageOffset((prev) => {
      if (type === PageNavigationType.Next) {
        return prev + 20;
      }
      return prev - 20;
    });
  };

  return (
    <button
      type="button"
      className="rounded-md border bg-sky-400 p-2 font-bold uppercase tracking-wider text-white shadow-md hover:bg-sky-700"
      onClick={buttonHandler}>
      {text}
    </button>
  );
}

export function PageNavigation({setPageOffset, offSet}: PageNavigationProps) {
  const buttonClass = [
    'mt-2 mb-4 flex w-full justify-center md:col-span-2 lg:col-span-3 xl:col-span-4',
  ];

  let baseText: string;

  if (offSet === 0) {
    buttonClass.push('justify-center');
    baseText = 'Load More Pokemon';
  } else {
    buttonClass.push('justify-between');
    baseText = 'Next';
  }

  return (
    <div className={buttonClass.join(' ')}>
      {offSet > 0 && (
        <PageNavigationButton
          text="PREV"
          setPageOffset={setPageOffset}
          type={PageNavigationType.Prev}
        />
      )}
      <PageNavigationButton
        text={baseText}
        setPageOffset={setPageOffset}
        type={PageNavigationType.Next}
      />
    </div>
  );
}
