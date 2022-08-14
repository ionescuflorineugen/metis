import React from 'react';
import Layout from '@theme/Layout';

export default function Snippets() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>2</p>
      </div>
    </Layout>
  );
}
/**
 * BEFORE
  {/* {columnData.map((card, index) => {
        const { type, image, redirectUrl, buttonTitle, buttonPosition, buttonUrl, hasIcon } = card;
        return (
          <CardWithButton
            key={index}
            type={type}
            image={image}
            redirectUrl={redirectUrl}
            buttonTitle={buttonTitle}
            buttonPosition={buttonPosition}
            buttonUrl={buttonUrl}
            hasIcon={hasIcon}
          />
        );
      })} }

    AFTER
    ....
    return (
      <CardWithButton index ...card>
    )

    BEFORE - replace a piece of an initial string with dynamic data
    //  'component.offersAndPromotions.dropdown.image.by.type': 'Tip Imagine: {{type}} '
     <span>{translations['component.offersAndPromotions.dropdown.image.by.type'].replace('{{type}}', item.type)}</span>


    BEFORE - add in ts rest parameter for extra props
    interface IContentPositioning {
     readonly item: any;
     readonly handleItemClick: (item: IDropdownItem, key: string, ...rest: any) => void;
     // THIS
     readonly [rest: string]: any;
    }

                 <ContentPositioning
                  item={item}
                  handleItemClick={handleItemClick}
                  // THOSE ARE EXTRA PARAMS
                  columnItem={column}
                  indexItem={indexItem}
                />

      TIP: Daca ai un maxheight cat are cand sunt 3 elemente si canx ai 2 vei avea acelasi heoght. cand vei avea 4 ele se vor micsora pentru ca ai mai mult de 3
          Le pui cardurilorun width, evident :)
    
      TIP: For selectors that doesn't have child elements
      :only-child {
        aspect-ratio: 1/1;
      }

      TIP: double negation
      https://stackoverflow.com/questions/29312123/how-does-the-double-exclamation-work-in-javascript

      TIP: at the beginning of a function use 
      if(!data) {
        return null;
      }

      TIP: cand ai un width si adaugi padding: 100% o sa ai un patrat
      TIP: always use margin-top - for unrendered elements

      TIP: Safari 14 gap property doesn't work
      use selector: parent element > * + * {// will select the rest of children except the first one} and add margin on it or  > :not(:first-child)
        or https://stackoverflow.com/questions/20626685/better-way-to-set-distance-between-flexbox-items
        .flex { display: flex; flex-wrap: wrap;  }
.box { background: gray; height: 100px; min-width: 100px; flex: auto; }
.flex-wrapper {outline: 1px solid red; }

/* ----- Flex gap 10px: ----- */

// .flex > * {
//   margin: 5px;
// }
// .flex {
//   margin: -5px;
// }
// .flex-wrapper {
//   width: 400px; /* optional */
//   overflow: hidden; /* optional */
// }
{
  /* <div class='flex-wrapper'>
  <div class='flex'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
</div>
https://jsfiddle.net/wmtz8dch/1/
https://stackoverflow.com/questions/3511869/negative-margins-to-shrink-a-div
https://stackoverflow.com/questions/18744164/flex-box-align-last-row-to-grid
} */
}
