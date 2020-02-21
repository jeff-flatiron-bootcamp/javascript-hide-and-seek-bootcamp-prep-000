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
  const list = document.querySelectorAll("#grand-node div");
  return list[list.length-1];
}

function increaseRankBy(n)
{
  const list = document.querySelectorAll(".ranked-list")
  for(let i = 0; i < list.length; i++)
    list[i].innerHTML = (list[i].innerHTML + n).toString();
}