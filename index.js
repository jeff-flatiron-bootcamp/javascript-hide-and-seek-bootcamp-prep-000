function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector('div#nested div.target');
}

function deepestChild()
{
  const list = document.querySelectorAll("#grand-node div"
  return list[list.length-1];
}

function increaseRankBy(n)
{
  
}