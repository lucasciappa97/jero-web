const InfiniteScroll = () => {
  // Array de datos
  const titles = [
    {
      text: "Actualidad",
      bg: "bg-gray-100",
      color: "black",
    },
    {
      text: "Liderazgo",
      bg: "bg-primary",
      color: "white",
    },
    {
      text: "Transformación",
      bg: "bg-primary-dark",
      color: "white",
    },
    {
      text: "Interpretación",
      bg: "bg-secondary-light",
      color: "white",
    },
    {
      text: "Eficiencia",
      bg: "bg-gray-100",
      color: "black",
    },
    {
      text: "Propósito",
      bg: "bg-primary",
      color: "white",
    },
    {
      text: "Comunicación Efectiva",
      bg: "bg-primary-dark",
      color: "white",
    },
    {
      text: "Autoconocimiento",
      bg: "bg-secondary-light",
      color: "white",
    },
  ];

  // Componente de Etiqueta Reutilizable para el map
  const TagItem = ({ titleItem, index }) => {
    const tagClasses = titleItem.bg || "bg-white";

    return (
      <li key={index} className="list-none mr-12 flex-shrink-0">
        <span
          className={`
            flex items-center justify-center 
            px-12 py-3 text-sm
            rounded-3xl
            ${tagClasses} text-${titleItem.color}
           ${titleItem.color == "black" ? "border border-1 border-black" : ""}
          `}
        >
          {titleItem.text}
        </span>
      </li>
    );
  };

  return (
    <div
className="inline-flex w-full flex-nowrap overflow-hidden bg-white 
    [mask-image:linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] 
    sm:[mask-image:linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      {/* 1. Lista Original */}
      <ul className="brands-wrapper">
        {titles.map((titleItem, index) => (
          <TagItem key={`original-${index}`} titleItem={titleItem} />
        ))}
      </ul>

      {/* 2. Lista Duplicada (ESENCIAL para el efecto infinito) */}
      <ul className="brands-wrapper" aria-hidden="true">
        {titles.map((titleItem, index) => (
          <TagItem key={`clone-${index}`} titleItem={titleItem} />
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScroll;
