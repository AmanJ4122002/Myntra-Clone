let bag;
onload();

function onload()
{
    let bagStr=localStorage.getItem('bag');
    bag= bagStr ? JSON.parse(bagStr) : [];
    display();
    displayBagIcon();
}

function addToBag(itemId)
{
    bag.push(itemId);
    localStorage.setItem('bag',JSON.stringify(bag));
    displayBagIcon();
}

function display()
{
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement)
    {
        return ;
    }

    let innerHTML=``;
    items.forEach(item=>{
        innerHTML+=`<div class="item">
                    <img src="${item.image}" alt="item-image" class="item-image">
                    <div class="rating">
                        ${item.rating.stars}⭐ | ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onClick="addToBag(${item.id})">Add To Bag</button>
                </div>`
    })

    itemsContainerElement.innerHTML=innerHTML;
}

function displayBagIcon()
{
    let bagItem=document.querySelector('.item_count');
    if(bag.length>0)
    {
        bagItem.style.visibility='visible';
        bagItem.innerText=bag.length;
    }
    else
    {
        bagItem.style.visibility='hidden';
    }
}