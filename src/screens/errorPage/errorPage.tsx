export const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-800 text-center p-5'>
      <h1 className='text-3xl font-bold text-red-600'>
        Oops! Something went wrong
      </h1>
      <p className='mt-4 text-xl dark:text-neutral-300'>
        Sorry, but this route does not exist.
      </p>
      <p className='text-gray-500 dark:text-neutral-400 mt-2'></p>
    </div>
  );
};
