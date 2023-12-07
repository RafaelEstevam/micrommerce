export const handleTypeStyle = (type) => {
  switch(type){
      case 'melee':
          return 'bg-red-500';
      case 'reach':
          return 'bg-yellow-400';
      case 'special':
          return 'bg-purple-500';
      case 'defense':
          return 'bg-blue-300';
      default:
          return 'bg-slate-500';
  }
}