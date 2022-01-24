import { Form } from "remix";

export default function Index() {
  return (
    <div className="m-8">
      <div className="m-4 text-center">
        <h1 className="text-4xl">8 wonders</h1>
        <p>A game that is not familiar at all to you.</p>
      </div>
      <div>
        <Form action="/start" method="post">
          <input name="seed" type="number" defaultValue="10"/>
          <input type="submit" value="Empezar" className="p-2 m-2 bg-red-200 rounded-sm"/>
        </Form>
      </div>
    </div>
  );
}
