import { useEffect, useState } from "react";

type UserData = {
  name: string;
};

export default function UseEffectComponent() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const [term, setTerm] = useState("");
  const [users, setUsers] = useState<UserData[] | undefined>(undefined);
  const display = users?.filter((user) => user.name.includes(term));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto w-120 border rounded-md p-4 shadow-md">
      <h2 className="font-semibold">useEffect</h2>
      <p className="text-sm">
        useEffect lets you run side effects after rendering. It runs on the
        initial render and can re-run when specified dependencies change.
      </p>
      <hr className="my-2" />
      <input
        type="text"
        className="w-full border rounded-md mb-2 p-2"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Type here"
      />
      {display?.map((user, idx) => (
        <div key={idx}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
