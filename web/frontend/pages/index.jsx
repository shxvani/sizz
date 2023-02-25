// import {
//   Card,
//   Page,
//   Layout,
//   TextContainer,
//   Image,
//   Stack,
//   Link,
//   Heading,
// } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";

// import { trophyImage } from "../assets";

// import { ProductsCard } from "../components";

// export default function HomePage() {
//   return (
//     <Page narrowWidth>
//       <TitleBar title="App name" primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           <Card sectioned>
//             <Stack
//               wrap={false}
//               spacing="extraTight"
//               distribution="trailing"
//               alignment="center"
//             >
//               <Stack.Item fill>
//                 <TextContainer spacing="loose">
//                   <Heading>Nice work on building a Shopify app 🎉</Heading>
//                   <p>
//                     Your app is ready to explore! It contains everything you
//                     need to get started including the{" "}
//                     <Link url="https://polaris.shopify.com/" external>
//                       Polaris design system
//                     </Link>
//                     ,{" "}
//                     <Link url="https://shopify.dev/api/admin-graphql" external>
//                       Shopify Admin API
//                     </Link>
//                     , and{" "}
//                     <Link
//                       url="https://shopify.dev/apps/tools/app-bridge"
//                       external
//                     >
//                       App Bridge
//                     </Link>{" "}
//                     UI library and components.
//                   </p>
//                   <p>
//                     Ready to go? Start populating your app with some sample
//                     products to view and test in your store.{" "}
//                   </p>
//                   <p>
//                     Learn more about building out your app in{" "}
//                     <Link
//                       url="https://shopify.dev/apps/getting-started/add-functionality"
//                       external
//                     >
//                       this Shopify tutorial
//                     </Link>{" "}
//                     📚{" "}
//                   </p>
//                 </TextContainer>
//               </Stack.Item>
//               <Stack.Item>
//                 <div style={{ padding: "0 20px" }}>
//                   <Image
//                     source={trophyImage}
//                     alt="Nice work on building a Shopify app"
//                     width={120}
//                   />
//                 </div>
//               </Stack.Item>
//             </Stack>
//           </Card>
//         </Layout.Section>
//         <Layout.Section>
//           <ProductsCard />
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }


import { useState } from 'react';
import {
  Card,
  Layout,
  Page,
  RadioButton,
  TextField,
} from '@shopify/polaris';

export default function Index() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValues, setInputValues] = useState({});

  const handleRadioButtonChange = (value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (field, value) => {
    setInputValues({
      ...inputValues,
      [field]: value,
    });
  };

  const renderSelectedOptionCard = () => {
    switch (selectedOption) {
      case 'shirtSizeMen':
        return (
          <Card sectioned>
            <TextField
              label="Shirt size men - length"
              value={inputValues['length'] || ''}
              onChange={(value) => handleInputChange('length', value)}
            />
            <TextField
              label="Shirt size men - width"
              value={inputValues['width'] || ''}
              onChange={(value) => handleInputChange('width', value)}
            />
          </Card>
        );
      case 'pantSizeMen':
        return (
          <Card sectioned>
            <TextField
              label="Pant size men - waist"
              value={inputValues['waist'] || ''}
              onChange={(value) => handleInputChange('waist', value)}
            />
            <TextField
              label="Pant size men - inseam"
              value={inputValues['inseam'] || ''}
              onChange={(value) => handleInputChange('inseam', value)}
            />
          </Card>
        );
      case 'footwearSize':
        return (
          <Card sectioned>
            <TextField
              label="Footwear size - length"
              value={inputValues['length'] || ''}
              onChange={(value) => handleInputChange('length', value)}
            />
            <TextField
              label="Footwear size - width"
              value={inputValues['width'] || ''}
              onChange={(value) => handleInputChange('width', value)}
            />
          </Card>
        );
      default:
        return null;
    }
  };

  const ProductsCard = () => {
    return (
      <Card>
        <Card.Section>
          <p>This is the products card</p>
        </Card.Section>
      </Card>
    );
  };

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <h1>Select your sizing option:</h1>
            <div>
              <RadioButton
                label="Men's shirt size"
                checked={selectedOption === 'shirtSizeMen'}
                onChange={() => handleRadioButtonChange('shirtSizeMen')}
              />
              <br />
              <RadioButton
                label="Men's pant size"
                checked={selectedOption === 'pantSizeMen'}
                onChange={() => handleRadioButtonChange('pantSizeMen')}
              />
              <br />
              <RadioButton
                label="Footwear size"
                checked={selectedOption === 'footwearSize'}
                onChange={() => handleRadioButtonChange('footwearSize')}
              />
            </div>

          </Card>
        </Layout.Section>
        <Layout.Section>
          {renderSelectedOptionCard()}
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
