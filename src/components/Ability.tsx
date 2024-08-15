interface Props {
  name: string;
  slot: number;
  is_hidden: boolean;
}

export const Ability = ({ name, slot, is_hidden }: Props) => {
  return (
    <div key={name} className="flex gap-10 flex-wrap justify-center">
      <div className="shadow-lg rounded-lg p-4 m-2 w-64">
        <h2 className="text-xl font-bold mb-2 capitalize">{name} </h2>
        <p className="text-gray-700">Slot: {slot}</p>
        <p className={`text-gray-700`}>
          {is_hidden ? "Habilidad Oculta" : "Habilidad"}
        </p>
      </div>
    </div>
  );
};
