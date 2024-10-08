type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Profile = {
  top: Pick<AllType, 'name' | 'color'>;
  bottom: Pick<AllType, 'position' | 'weight'>;
};

function compare(top: Profile['top'], bottom: Profile['bottom']): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log(
  compare({ name: 'Yana', color: 'green' }, { position: 2, weight: 50 })
);
