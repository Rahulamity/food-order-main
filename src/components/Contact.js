const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="font-bold text-3xl mb-4 text-blue-500">Contact Us Page</h1>
        <form>
          <input type="text" className="border border-gray-300 p-2 w-full mb-4 rounded-md" placeholder="name" />
          <input type="text" className="border border-gray-300 p-2 w-full mb-4 rounded-md" placeholder="message" />
          <button className="border border-blue-500 bg-blue-500 text-white p-2 w-full rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
