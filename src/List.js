const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <figure className="flex bg-white rounded-xl p-2 justify-items-center items-center">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full ring-2 object-cover shadow-sm"
            />
            <div className="ml-5 text-center flex flex-col">
              <h1 className="font-bold">{name}</h1>
              <hr />
              <figcaption className="font-medium">
                <p className="font-semibold text-gray-400">{age} years</p>
              </figcaption>
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default List;
