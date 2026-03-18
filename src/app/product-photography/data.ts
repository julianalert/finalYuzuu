export type SiloCategory = 'industry' | 'product' | 'style'

export type SiloFaq = {
  question: string
  answer: string[]
}

export type SiloBestStyle = {
  slug: string
  label: string
  why: string
}

export type SiloPhotoExample = {
  src: string
  alt: string
  caption?: string
}

export type SiloItem = {
  slug: string
  label: string
  category: SiloCategory
  heroTitle: string
  description: string
  image?: string
  tips?: string[]
  faqs?: SiloFaq[]
  bestStyles?: SiloBestStyle[]
  examples?: SiloPhotoExample[]
}

export const FALLBACK_EXAMPLES: SiloPhotoExample[] = [
  { src: '/img/product-photography/product-photography.png', alt: 'Product photography example', caption: 'Studio product photography' },
  { src: '/img/product-photography/lifestyle-product-photo.png', alt: 'Lifestyle product photography example', caption: 'Lifestyle product photography' },
  { src: '/img/product-photography/studio-photo.png', alt: 'Studio product photography example', caption: 'Clean studio photography' },
]

export const FALLBACK_FAQS: SiloFaq[] = [
  {
    question: 'What equipment do I need for product photography?',
    answer: [
      'For basic product photography you need a camera (a modern smartphone works), a tripod, a light source (natural window light or a simple softbox), and a backdrop. A white foam board for bouncing light is also a cheap and effective addition.',
      'That said, the biggest limiting factor is rarely equipment. Lighting control, post-processing, and consistency matter far more than the camera body you use.',
    ],
  },
  {
    question: 'How long does a product photography shoot take?',
    answer: [
      'A basic studio shoot for a single product , three to five angles on a white background , typically takes 30 to 60 minutes including setup. A full lifestyle shoot with props and multiple scene setups can take a full day.',
      'With AI product photography, the same results take under a minute per image. You upload your product photo, choose a scene style, and receive a finished image without booking time or setting up lights.',
    ],
  },
  {
    question: 'What file format should product photos be delivered in?',
    answer: [
      'JPEG is the standard for e-commerce product pages due to smaller file sizes and broad compatibility. PNG is preferred when you need a transparent background. For ads and print, high-resolution TIFF or PNG files are recommended.',
      'Most platforms , Shopify, Amazon, WooCommerce , accept JPEG and PNG. Aim for at least 1000x1000px to meet zoom requirements.',
    ],
  },
  {
    question: 'Can I use AI to create product photos?',
    answer: [
      'Yes. AI product photography tools like Yuzuu take your existing product images and place them into photorealistic studio and lifestyle scenes. The result looks identical to a professional shoot because the AI is trained on thousands of real product photos.',
      'Brands using AI product photography see faster turnaround (minutes instead of days), lower costs, and the ability to test multiple visual styles without reshooting.',
    ],
  },
]

export const FALLBACK_IMAGE = '/img/product-photography/industry/product-photography-sport.png'

export const FALLBACK_TIPS: string[] = [
  'Use a neutral background (white, grey, or light beige) to keep the focus on the product and make editing easier.',
  'Shoot in natural light near a window, or use softbox lights to get diffused, even lighting that minimises harsh shadows.',
  'Always shoot on a tripod to avoid blur, especially for close-up or macro shots where small movements are magnified.',
  'Capture multiple angles: front, back, side, top-down, and a close-up detail shot. Customers want to see everything.',
  'Keep your colour profile consistent across all product photos so your catalogue looks cohesive on product pages.',
  'Clean the product thoroughly before shooting. Fingerprints, dust, and smudges are amplified under studio lighting.',
  'Use a shallow depth of field to isolate the product and create a professional, polished look.',
  'Edit for consistency: adjust exposure, white balance, and contrast uniformly so all photos feel part of the same shoot.',
]

export const industries: SiloItem[] = [
  {
    slug: 'beauty',
    label: 'Beauty',
    category: 'industry',
    heroTitle: 'Beauty Product Photography',
    description:
      'Create stunning AI-powered beauty product photos that convert. From foundation to highlighter, generate ultra-realistic studio and lifestyle shots that make every SKU irresistible to shoppers.',
    faqs: [
      {
        question: 'What makes beauty product photography different from other product photography?',
        answer: [
          'Beauty product photography needs to communicate texture, finish, and sensory appeal , things a customer cannot experience online. A foundation needs to look buildable and skin-like. A highlighter needs to show its glow. A serum needs to look clinical and trustworthy.',
          'This means lighting is everything. Soft, diffused light reveals texture without harsh reflections, while strategically placed rim lights add the luminosity that makes beauty products feel premium.',
        ],
      },
      {
        question: 'What background is best for beauty product photography?',
        answer: [
          'White and light grey backgrounds are the industry standard for beauty product pages , they are clean, clinical, and keep the focus entirely on the product. For brand-building content (social media, ads, editorial), marble, pastel, and textured backgrounds perform well because they communicate luxury and femininity.',
          'The key is matching the background to the brand positioning. A mass-market product benefits from clean simplicity. A premium beauty brand benefits from backgrounds that signal taste and exclusivity.',
        ],
      },
      {
        question: 'How do you photograph reflective beauty packaging?',
        answer: [
          'Glass bottles, metallic caps, and glossy finishes are notoriously difficult to shoot because they pick up reflections of everything in the room , including the camera and photographer. The solution is to use a light tent or shoot inside a cove (a curved seamless backdrop) to create even, reflection-free illumination.',
          'Post-processing also plays a key role. Removing unwanted reflections and cleaning up specular highlights is standard practice in professional beauty retouching.',
        ],
      },
      {
        question: 'Can AI generate beauty product photos that look professional?',
        answer: [
          'Yes, and the results are indistinguishable from studio photography when done correctly. AI beauty product photography preserves your exact packaging , the label, the colour, the shape , while placing it in a professional lighting environment or lifestyle scene.',
          'For beauty brands, this means launching new SKUs faster, testing different visual styles without reshooting, and maintaining a consistent brand aesthetic across every channel without booking a photographer.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Shows beauty products in use, building aspiration and helping customers picture themselves with the product.' },
      { slug: 'studio-clean', label: 'Studio Clean', why: 'Pure white backgrounds keep focus on packaging detail and product colour accuracy for marketplace listings.' },
      { slug: 'macro-detail', label: 'Macro Detail', why: 'Reveals texture, finish, and pigment at close range, communicating quality that customers cannot experience online.' },
    ],
  },
  {
    slug: 'cosmetics',
    label: 'Cosmetics',
    category: 'industry',
    heroTitle: 'Cosmetics Product Photography',
    description:
      'Generate photo-realistic cosmetics imagery without booking a studio. Lipsticks, palettes, blushes , every product looks polished, professional, and ready to sell.',
    faqs: [
      {
        question: 'How do you photograph cosmetics products like lipstick and eyeshadow palettes?',
        answer: [
          'Cosmetics require macro-level detail , the pigment payoff of an eyeshadow, the bullet shape of a lipstick, the texture of a blush. Close-up shots with a macro lens (or equivalent setting) are essential to show customers exactly what they are buying.',
          'For palettes, a flat lay from directly above is the most effective composition because it shows all shades in one shot. For lipsticks and compacts, a three-quarter angle at eye level shows both the product shape and the colour simultaneously.',
        ],
      },
      {
        question: 'What lighting works best for cosmetics photography?',
        answer: [
          'Soft, even lighting is the foundation of good cosmetics photography. A large light source positioned at 45 degrees minimises harsh shadows while still giving the product dimension. A reflector or fill light on the opposite side prevents the shadow side from going too dark.',
          'For shimmer and glitter products, directional hard light can be used intentionally to activate sparkle and show off the finish. The key is knowing when to use soft light for clean presentation and hard light for effect.',
        ],
      },
      {
        question: 'How do you make a cosmetics product look expensive in photos?',
        answer: [
          'Premium cosmetics photography comes down to three things: clean surfaces, perfect props, and restrained composition. Wipe every product before shooting. Use props (marble slabs, fresh flowers, brushes) that match the brand tier. Leave generous negative space around the product.',
          'Post-processing matters too. Remove every fingerprint, smooth out any surface imperfections on packaging, and ensure the whites are pure white , not a warm cream that reads as cheap.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'studio-clean', label: 'Studio Clean', why: 'The industry standard for cosmetics: clean whites that keep every colour true and every detail sharp.' },
      { slug: 'flatlay', label: 'Flatlay', why: 'Overhead compositions show full palettes and product ranges in a single social-media-ready shot.' },
      { slug: 'macro-detail', label: 'Macro Detail', why: 'Close-up shots of pigment, texture, and finish are the most convincing proof of product quality.' },
    ],
  },
  {
    slug: 'fashion',
    label: 'Fashion',
    category: 'industry',
    heroTitle: 'Fashion Product Photography',
    description:
      'Elevate your fashion brand with AI product photos that look like a full editorial shoot. Studio whites, lifestyle contexts, flat lays , all without a photographer.',
    faqs: [
      {
        question: 'What are the main types of fashion product photography?',
        answer: [
          'There are three main formats: on-model (worn by a real or AI-generated model), ghost mannequin (the product shot on an invisible mannequin to show shape and fit), and flat lay (the garment laid flat, shot from above). Each has its place.',
          'On-model photography converts best because it shows fit and styling in context. Ghost mannequin is the most cost-effective for catalogues. Flat lays are highly shareable on social media and work well for accessories and folded items.',
        ],
      },
      {
        question: 'How do you photograph clothing without a model?',
        answer: [
          'Ghost mannequin (also called invisible mannequin) photography involves shooting the garment on a mannequin, then removing the mannequin in post-processing so the clothing appears to float naturally. It is faster and cheaper than model photography but still communicates fit.',
          'Flat lays are another approach: the garment is pressed, arranged neatly, and photographed from directly above. This works especially well for accessories, t-shirts, and items where drape and movement are less important.',
        ],
      },
      {
        question: 'How can AI help with fashion product photography?',
        answer: [
          'AI can place your fashion products on virtual models, generate lifestyle backgrounds, and create consistent visual presentations across an entire collection without booking a studio or casting models. This is particularly valuable for independent brands and high-volume catalogues.',
          'For fashion brands, the ability to show the same item in multiple contexts , street style, studio white, editorial , without reshooting is a significant competitive advantage when launching new collections.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Places garments in real-world contexts so customers can visualise fit, styling, and occasion use.' },
      { slug: 'studio', label: 'Studio', why: 'Controlled studio lighting on neutral backgrounds keeps catalogue shots consistent and professional.' },
      { slug: 'flatlay', label: 'Flatlay', why: 'Overhead flat lays are highly shareable on social media and show folded items and accessories at their best.' },
    ],
  },
  {
    slug: 'supplements',
    label: 'Supplements',
    category: 'industry',
    heroTitle: 'Supplements Product Photography',
    description:
      'Build trust and boost conversions with clean, professional supplement product photos. Generate gym-ready lifestyle shots and sleek studio images that speak to your customers.',
    faqs: [
      {
        question: 'What photography style works best for supplement brands?',
        answer: [
          'Supplement brands typically need two distinct visual styles: clinical studio shots for product pages (clean white background, sharp labels, professional lighting) and lifestyle shots for social media and ads (gym environments, active people, ingredients spread artfully around the product).',
          'The studio shots build trust and credibility. The lifestyle shots build aspiration and desire. Most successful supplement brands use both in combination.',
        ],
      },
      {
        question: 'How do you photograph supplement packaging to show label detail?',
        answer: [
          'Label legibility is critical in supplements because customers are looking for specific ingredients, dosages, and certifications. Shoot the front label face-on with even, diffused lighting that eliminates hot spots and reflections. Then shoot a close-up of the key claims and certifications.',
          'For tubs and bottles with curved labels, a slight three-quarter angle helps the eye read the text more naturally. Avoid extreme angles that distort the label.',
        ],
      },
      {
        question: 'How can I make supplement product photos stand out?',
        answer: [
          'The supplement market is crowded and most brands use very similar photography: product on white, maybe with some powder spilling next to it. To stand out, invest in environments that speak to your specific customer: the home gym, the morning ritual, the post-workout recovery moment.',
          'Ingredient photography is another differentiator. Showing the raw ingredients , ashwagandha root, citrus slices, protein powder cascading , creates a sense of naturalness and quality that a plain product shot cannot communicate.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'studio-clean', label: 'Studio Clean', why: 'Clean white shots communicate trust and product credibility, essential for health-conscious supplement buyers.' },
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Gym and active lifestyle contexts create aspiration and help customers see the product as part of their routine.' },
      { slug: 'ugc', label: 'UGC', why: 'Authentic, unpolished UGC-style shots build social proof and perform strongly in paid social campaigns.' },
    ],
  },
  {
    slug: 'food',
    label: 'Food',
    category: 'industry',
    heroTitle: 'Food Product Photography',
    description:
      'Make your food products impossible to scroll past. AI-generated food photography that captures appetite appeal , from packaged goods to artisan products , with studio precision.',
    faqs: [
      {
        question: 'What is food product photography and how is it different from food styling?',
        answer: [
          'Food product photography focuses on photographing packaged food items , jars, bottles, boxes, tins , to sell them on e-commerce or in retail. Food styling, by contrast, is about making prepared food look as delicious as possible for restaurant menus or editorial content.',
          'For packaged food brands, the goal is to make the product look trustworthy, premium, and appetising while clearly communicating what is inside. The packaging is the hero, not the prepared dish.',
        ],
      },
      {
        question: 'What lighting is best for food product photography?',
        answer: [
          'Natural light from a north-facing window is beloved by food photographers for its soft, flattering quality. In a studio, a large softbox positioned to the side (not directly overhead) creates a similar effect with more control and consistency.',
          'Back lighting and side lighting are both popular for packaged food because they create depth and make ingredients inside translucent packaging glow. Avoid direct frontal flash , it flattens the product and removes all texture.',
        ],
      },
      {
        question: 'How do you make packaged food products look appealing in photos?',
        answer: [
          'Context is everything. A jar of pasta sauce photographed alone on white looks generic. The same jar photographed surrounded by fresh tomatoes, basil, and a rustic wooden surface tells a story. Props and surfaces that reinforce the product promise , freshness, artisan quality, indulgence , transform a product shot into a desire-creating image.',
          'For snack and confectionery brands, a strategically split-open or partially eaten product showing the interior texture (the crunch, the filling, the colour) is highly effective at communicating what makes the product worth buying.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Contextual props (fresh ingredients, kitchen surfaces) make packaged food feel natural, fresh, and artisan.' },
      { slug: 'flatlay', label: 'Flatlay', why: 'Overhead compositions showing the product surrounded by ingredients perform extremely well on social media.' },
      { slug: 'studio-clean', label: 'Studio Clean', why: 'Clean studio shots are required for marketplace listings and ensure accurate colour representation.' },
    ],
  },
  {
    slug: 'electronics',
    label: 'Electronics',
    category: 'industry',
    heroTitle: 'Electronics Product Photography',
    description:
      'Showcase your electronics with crisp, high-tech product photography. From consumer gadgets to accessories, generate lifestyle and studio shots that highlight features and drive clicks.',
    faqs: [
      {
        question: 'What are the challenges of electronics product photography?',
        answer: [
          'Electronics present several technical challenges: highly reflective surfaces (glass, metal, chrome), screens that need to look active and vibrant, and the need to show small details (ports, buttons, textures) with precision.',
          'Reflections are the biggest obstacle. Managing them requires a combination of polarising filters, strategically placed flags (black cards to block light sources), and careful post-processing to remove any remaining unwanted reflections.',
        ],
      },
      {
        question: 'Should electronics product photos show the screen on or off?',
        answer: [
          'Almost always on. A device with a black screen looks dead and uninviting. Showing an active, well-designed UI screen dramatically increases the perceived value of the product. For devices where you cannot easily control the screen content, a screen replacement in post-processing is standard practice.',
          'When showing the screen, make sure the content shown is relevant and aspirational for your target customer. A phone case brand might show a beautiful wallpaper. A productivity app might show an organised task list.',
        ],
      },
      {
        question: 'What background works best for electronics product photos?',
        answer: [
          'Dark backgrounds (deep grey, charcoal, black) are popular for premium electronics because they create contrast, make the product pop, and signal a high-tech, sophisticated brand. White and light grey are better for marketplace listings where clarity and legibility are the priority.',
          'Lifestyle desk setups , showing the product in a real workspace or home environment , are extremely effective for electronics because they help customers visualise the product as part of their daily life.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'studio-clean', label: 'Studio Clean', why: 'Clean white shots meet marketplace requirements and keep the focus on product detail and specs.' },
      { slug: 'dramatic-lighting', label: 'Dramatic Lighting', why: 'Hard light on dark backgrounds creates a high-tech premium aesthetic that elevates electronics brands.' },
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Desk and home setup contexts help customers visualise the product in their own environment.' },
    ],
  },
  {
    slug: 'home-decor',
    label: 'Home Decor',
    category: 'industry',
    heroTitle: 'Home Decor Product Photography',
    description:
      'Help customers imagine your home decor in their space. Generate warm, styled lifestyle photography and clean studio shots that turn browsers into buyers.',
    faqs: [
      {
        question: 'How do you photograph home decor products to maximise conversions?',
        answer: [
          'The key to home decor photography is context. Customers are not just buying a vase , they are buying a vision of how their home could look. Lifestyle shots that place the product in a real or styled room environment consistently outperform plain white background shots for home decor.',
          'Show the product in scale (next to recognisable objects so customers understand size), in context (in a room that matches the target customer lifestyle), and in detail (close-up shots of texture, material, and finish).',
        ],
      },
      {
        question: 'What lighting is best for home decor photography?',
        answer: [
          'Warm, natural-looking light is the most effective for home decor because it creates the cosy, aspirational atmosphere that sells lifestyle products. Large windows with diffused natural light are ideal. In a studio, large softboxes positioned to mimic window light work well.',
          'Avoid cold, clinical lighting for home decor , it makes warm wood tones and soft fabrics look uninviting. The goal is to make the viewer feel like they want to live in the photo.',
        ],
      },
      {
        question: 'How many photos does a home decor product need?',
        answer: [
          'At minimum: one clean studio shot (white or neutral background) for the primary product listing image, two or three lifestyle shots in context, and one or two detail close-ups showing material and finish quality.',
          'Home decor products also benefit from scale reference shots , showing the product next to a hand, a chair, or another recognisable object so customers can accurately judge size before buying.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Room-set and interior lifestyle shots help customers imagine the product in their own home, which is essential for decor.' },
      { slug: 'flatlay', label: 'Flatlay', why: 'Styled overhead compositions work beautifully for smaller decor items and create highly shareable social content.' },
      { slug: 'minimalist', label: 'Minimalist', why: 'Clean, spacious compositions with minimal props let the product design speak for itself.' },
    ],
  },
  {
    slug: 'luxury-brands',
    label: 'Luxury Brands',
    category: 'industry',
    heroTitle: 'Luxury Brand Product Photography',
    description:
      'Luxury demands perfection. Create flawless, high-end product imagery with the visual language of premium brands , dramatic lighting, elegant backdrops, and impeccable detail.',
    faqs: [
      {
        question: 'What makes luxury product photography different?',
        answer: [
          'Luxury product photography is defined by restraint, precision, and the elimination of everything that does not serve the product. Where mass-market photography tries to show as much as possible, luxury photography uses negative space, dramatic shadow, and exquisite detail to create desire through subtraction.',
          'Every element , the background material, the prop, the lighting angle , must be chosen deliberately. A single scratch on a surface, a misaligned label, or a blown-out highlight tells the viewer the brand does not care about perfection. For luxury, perfection is the baseline.',
        ],
      },
      {
        question: 'What backgrounds and surfaces work best for luxury product photography?',
        answer: [
          'Marble, brushed metal, dark lacquered surfaces, and fine fabric textures all communicate premium positioning. Black backgrounds with dramatic rim lighting are particularly effective for jewellery, watches, and spirits because they create depth and make the product appear to float.',
          'Avoid busy or colourful backgrounds that compete with the product. In luxury photography, the background is a supporting actor, not a co-star.',
        ],
      },
      {
        question: 'How do you photograph luxury products without a large budget?',
        answer: [
          'The most impactful luxury photography investments are styling and post-processing , not equipment. A well-styled shot on a $20 marble vinyl sheet, shot in natural light, retouched carefully, will outperform an expensive studio shoot that was not styled with intention.',
          'AI product photography is increasingly used by independent luxury brands for exactly this reason. You can place your product in a visually perfect environment , rich textures, dramatic lighting, impeccable composition , without the cost of renting a studio or hiring a stylist.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'luxury', label: 'Luxury', why: 'Opulent surfaces, refined lighting, and premium visual language that signals exclusivity and prestige.' },
      { slug: 'dramatic-lighting', label: 'Dramatic Lighting', why: 'Hard light with deep shadows creates intensity and gravitas that luxury products demand.' },
      { slug: 'minimalist', label: 'Minimalist', why: 'Restraint and negative space communicate confidence, a hallmark of every great luxury brand.' },
    ],
  },
  {
    slug: 'kids',
    label: 'Kids',
    category: 'industry',
    heroTitle: 'Kids Product Photography',
    description:
      'Warm, playful, and parent-approved. Generate AI product photos for kids products that build trust with parents and make every toy, clothing item, and accessory look as safe and fun as it really is.',
    faqs: [
      {
        question: 'What makes kids product photography different?',
        answer: [
          'Kids product photography has two audiences: children, who respond to colour, fun, and play, and parents, who are looking for safety cues, quality signals, and trustworthiness. Great kids photography satisfies both at once.',
          'Bright, warm colours and playful compositions attract children and communicate fun. Clean presentation, clear labelling, and context shots (showing a child using the product safely and happily) build the parental confidence that actually drives the purchase.',
        ],
      },
      {
        question: 'What background and styling works best for kids products?',
        answer: [
          'Soft pastels and warm neutrals are the most effective backgrounds for kids products because they feel safe, clean, and appropriate for the demographic. Bright primary colours work well for toys and educational products aimed at younger children.',
          'Props that reinforce the play and learning context are highly effective: building blocks, storybooks, soft toys arranged naturally. Avoid overly staged or sterile setups; warmth and authenticity convert better with parents.',
        ],
      },
      {
        question: 'How do you photograph kids clothing?',
        answer: [
          'Kids clothing is best shown either on children (lifestyle, in motion) or as flat lays styled with age-appropriate props. On-child photography showing movement and natural wear communicates fit and durability, which are the two most important purchase drivers for parents.',
          'If shooting without a child, ghost mannequin or structured flat lays with playful props (small toys, colourful accessories) help maintain the warm, energetic feel that makes kids fashion appealing.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Shows children using and enjoying the product, which is the most effective trust signal for parents.' },
      { slug: 'ugc', label: 'UGC', why: 'Authentic, real-feeling content resonates strongly with parents who value honesty over polish.' },
      { slug: 'studio-clean', label: 'Studio Clean', why: 'Clean studio shots on white backgrounds meet marketplace requirements and show product detail clearly.' },
    ],
  },
  {
    slug: 'sport',
    label: 'Sport',
    category: 'industry',
    heroTitle: 'Sport Product Photography',
    description:
      'High-energy, performance-first product photography for sport and outdoor brands. Generate studio and action-lifestyle shots that communicate durability, performance, and the drive to push further.',
    faqs: [
      {
        question: 'What makes sport product photography effective?',
        answer: [
          'Sport product photography needs to communicate performance, durability, and aspiration simultaneously. Customers buying sports gear are investing in their athletic identity as much as the product itself. The photography should make them feel like the product will help them achieve their goals.',
          'Energy and motion are key visual cues. Even a static product shot benefits from dramatic lighting, strong angles, and textural detail that communicates the gear is built for real performance, not just looks.',
        ],
      },
      {
        question: 'What backgrounds work best for sport product photography?',
        answer: [
          'Outdoor environments (trails, gyms, courts, pools) are highly effective because they place the product in the exact context it was designed for. Customers immediately understand the use case and the performance environment.',
          'Studio shots on dark or charcoal backgrounds work well for premium sport brands because they create drama and make vibrant product colours pop. High-contrast lighting that reveals material texture communicates quality and durability.',
        ],
      },
      {
        question: 'How do you photograph sport products to show performance features?',
        answer: [
          'Detail shots are critical for sport products: show the grip on a shoe sole, the weave of a performance fabric, the adjustment mechanism on a helmet strap. These micro-details answer the unspoken question every athlete has: "will this actually perform when I need it?"',
          'For wearable sport products, on-body lifestyle shots in active environments consistently outperform studio shots in conversion tests. Customers want to see the product moving with a body, not sitting static on a shelf.',
        ],
      },
    ],
    bestStyles: [
      { slug: 'outdoor', label: 'Outdoor', why: 'Natural outdoor environments place sport products in their intended context and build performance credibility.' },
      { slug: 'lifestyle', label: 'Lifestyle', why: 'Active lifestyle shots show the product in motion and help customers visualise using it during training.' },
      { slug: 'dramatic-lighting', label: 'Dramatic Lighting', why: 'High contrast lighting on dark backgrounds communicates power, energy, and premium performance positioning.' },
    ],
  },
]

export const products: SiloItem[] = [
  {
    slug: 'perfume',
    label: 'Perfume',
    category: 'product',
    heroTitle: 'Perfume Product Photography',
    description:
      'Capture the allure of your fragrance in every pixel. AI-generated perfume photography with moody lighting, elegant props, and cinematic depth that evokes the scent itself.',
  },
  {
    slug: 'skincare',
    label: 'Skincare',
    category: 'product',
    heroTitle: 'Skincare Product Photography',
    description:
      'Generate clean, clinical, and aspirational skincare product photos. Serums, moisturizers, and masks presented in studio-perfect lighting that builds brand credibility.',
  },
  {
    slug: 'serum',
    label: 'Serum',
    category: 'product',
    heroTitle: 'Serum Product Photography',
    description:
      'Make your serum the hero of every frame. Ultra-detailed AI product photography that highlights dropper precision, luxurious textures, and ingredient transparency.',
  },
  {
    slug: 'cream',
    label: 'Cream',
    category: 'product',
    heroTitle: 'Cream Product Photography',
    description:
      'Soft, inviting, and irresistibly tactile , generate AI cream and moisturizer product photos that communicate richness and quality without a single studio booking.',
  },
  {
    slug: 'jewelry',
    label: 'Jewelry',
    category: 'product',
    heroTitle: 'Jewelry Product Photography',
    description:
      'Jewelry photography that does justice to every gem and metal. AI-generated images with macro detail, reflective surfaces, and lifestyle contexts that make your pieces shine.',
  },
  {
    slug: 'necklace',
    label: 'Necklace',
    category: 'product',
    heroTitle: 'Necklace Product Photography',
    description:
      'Showcase your necklaces in their best light. From delicate chains to statement pendants, generate studio close-ups and lifestyle shots that drive jewellery sales.',
  },
  {
    slug: 'ring',
    label: 'Ring',
    category: 'product',
    heroTitle: 'Ring Product Photography',
    description:
      'Every facet, every detail , stunning ring product photography generated by AI. Perfect for engagement rings, fine jewellery, and fashion rings sold online.',
  },
  {
    slug: 'bracelet',
    label: 'Bracelet',
    category: 'product',
    heroTitle: 'Bracelet Product Photography',
    description:
      'From delicate bangles to bold cuffs, generate bracelet product photos with the elegance and detail your pieces deserve , no photo studio required.',
  },
  {
    slug: 'watch',
    label: 'Watch',
    category: 'product',
    heroTitle: 'Watch Product Photography',
    description:
      'Precision-crafted watch photography, generated by AI. Capture dial detail, strap texture, and brand heritage in images that reflect the quality of your timepiece.',
  },
  {
    slug: 'sunglasses',
    label: 'Sunglasses',
    category: 'product',
    heroTitle: 'Sunglasses Product Photography',
    description:
      'Make every frame a style statement. Generate AI sunglasses product photos , from editorial lifestyle shots to clean studio whites , that sell the look, not just the product.',
  },
  {
    slug: 'shoes',
    label: 'Shoes',
    category: 'product',
    heroTitle: 'Shoes Product Photography',
    description:
      'Step up your footwear listings with AI-generated shoe product photography. Studio flat lays, lifestyle street shots, and detail close-ups that convert casual browsers.',
  },
  {
    slug: 'sneakers',
    label: 'Sneakers',
    category: 'product',
    heroTitle: 'Sneakers Product Photography',
    description:
      'Hypebeast-worthy sneaker photography, generated by AI. Street lifestyle, clean studio, and creative angles that match the energy of your drops and collections.',
  },
  {
    slug: 'handbag',
    label: 'Handbag',
    category: 'product',
    heroTitle: 'Handbag Product Photography',
    description:
      'Luxury or accessible, every handbag deserves a great photo. Generate structured studio shots and editorial lifestyle images that show off stitching, hardware, and shape.',
  },
  {
    slug: 'wallet',
    label: 'Wallet',
    category: 'product',
    heroTitle: 'Wallet Product Photography',
    description:
      'Sleek, minimal, and perfectly composed , AI wallet product photography that highlights leather quality, card slots, and craftsmanship in every shot.',
  },
  {
    slug: 't-shirt',
    label: 'T-Shirt',
    category: 'product',
    heroTitle: 'T-Shirt Product Photography',
    description:
      'Ghost mannequin, flat lay, or lifestyle , generate t-shirt product photos that showcase fit, fabric, and print without the cost of models or studios.',
  },
  {
    slug: 'hoodie',
    label: 'Hoodie',
    category: 'product',
    heroTitle: 'Hoodie Product Photography',
    description:
      'Cozy, aspirational, and scroll-stopping , generate hoodie product photography across studio and lifestyle settings that capture the comfort and personality of your brand.',
  },
  {
    slug: 'protein-powder',
    label: 'Protein Powder',
    category: 'product',
    heroTitle: 'Protein Powder Product Photography',
    description:
      'Performance-first protein powder photography powered by AI. Gym-ready lifestyle shots and clean studio packaging images that speak to athletes and fitness enthusiasts.',
  },
  {
    slug: 'vitamins',
    label: 'Vitamins',
    category: 'product',
    heroTitle: 'Vitamins Product Photography',
    description:
      'Clean, clinical, and trustworthy , generate vitamins and supplement product photography that builds confidence at the point of purchase.',
  },
  {
    slug: 'candles',
    label: 'Candles',
    category: 'product',
    heroTitle: 'Candles Product Photography',
    description:
      'Warm glows, soft textures, and ambient vibes , AI-generated candle product photography that captures the mood of your brand and makes every jar irresistible.',
  },
  {
    slug: 'soap',
    label: 'Soap',
    category: 'product',
    heroTitle: 'Soap Product Photography',
    description:
      'Artisan or minimalist, generate soap product photos with lather, texture, and ingredient detail that communicate craft and quality to conscious shoppers.',
  },
  {
    slug: 'coffee',
    label: 'Coffee',
    category: 'product',
    heroTitle: 'Coffee Product Photography',
    description:
      'Aromatic, rich, and deeply aspirational , AI coffee product photography with lifestyle brewing scenes and clean studio packaging shots that convert coffee lovers.',
  },
  {
    slug: 'tea',
    label: 'Tea',
    category: 'product',
    heroTitle: 'Tea Product Photography',
    description:
      'Serene, premium, and ritual-forward , generate tea product photography that evokes calm, quality, and the full sensory experience of your blends.',
  },
  {
    slug: 'wine-bottle',
    label: 'Wine Bottle',
    category: 'product',
    heroTitle: 'Wine Bottle Product Photography',
    description:
      'Sommelier-worthy wine bottle photography, generated by AI. Cellar shots, table settings, and studio elegance that position your label at the premium end of the shelf.',
  },
  {
    slug: 'water-bottle',
    label: 'Water Bottle',
    category: 'product',
    heroTitle: 'Water Bottle Product Photography',
    description:
      'Active, clean, and built for the outdoors , generate water bottle product photos in gym, trail, and studio settings that speak directly to your active customer.',
  },
  {
    slug: 'phone-case',
    label: 'Phone Case',
    category: 'product',
    heroTitle: 'Phone Case Product Photography',
    description:
      'Sharp detail, on-device lifestyle shots, and studio flat lays , generate phone case product photography that highlights design, material, and drop protection.',
  },
  {
    slug: 'airpods-case',
    label: 'AirPods Case',
    category: 'product',
    heroTitle: 'AirPods Case Product Photography',
    description:
      'Compact, precise, and detail-rich , AI-generated AirPods case photography in desk lifestyle and studio contexts that showcase your design in its best light.',
  },
  {
    slug: 'headphones',
    label: 'Headphones',
    category: 'product',
    heroTitle: 'Headphones Product Photography',
    description:
      'Immersive, high-fidelity product photos for your headphones. Generate lifestyle listening scenes and technical studio shots that communicate audio quality visually.',
  },
  {
    slug: 'gaming-mouse',
    label: 'Gaming Mouse',
    category: 'product',
    heroTitle: 'Gaming Mouse Product Photography',
    description:
      'Aggressive angles, RGB lighting, and desk battlestation setups , generate gaming mouse product photography that speaks the language of the gaming community.',
  },
  {
    slug: 'keyboard',
    label: 'Keyboard',
    category: 'product',
    heroTitle: 'Keyboard Product Photography',
    description:
      'Keycap detail, desk setup aesthetics, and clean studio shots , generate keyboard product photography for mechanical, gaming, and productivity boards that enthusiasts will love.',
  },
  {
    slug: 'laptop-stand',
    label: 'Laptop Stand',
    category: 'product',
    heroTitle: 'Laptop Stand Product Photography',
    description:
      'Workspace-ready and ergonomically positioned , generate laptop stand product photos in real desk environments and clean studio settings that highlight build quality.',
  },
  {
    slug: 'desk-lamp',
    label: 'Desk Lamp',
    category: 'product',
    heroTitle: 'Desk Lamp Product Photography',
    description:
      'Warm light, modern design, and workspace atmosphere , AI-generated desk lamp photography in home office setups and studio contexts that illuminate your product\'s best features.',
  },
]

export const styles: SiloItem[] = [
  {
    slug: 'studio',
    label: 'Studio',
    category: 'style',
    heroTitle: 'Studio Product Photography',
    description:
      'Classic, controlled, and conversion-optimised , generate studio product photography with professional lighting, neutral backdrops, and impeccable composition for any product.',
  },
  {
    slug: 'studio-clean',
    label: 'Studio Clean',
    category: 'style',
    heroTitle: 'Studio Clean Product Photography',
    description:
      'Pure white backgrounds, sharp shadows, and pixel-perfect product isolation. Generate studio-clean product photos that are marketplace-ready and brand-consistent.',
  },
  {
    slug: 'lifestyle',
    label: 'Lifestyle',
    category: 'style',
    heroTitle: 'Lifestyle Product Photography',
    description:
      'Put your product in the hands of real life. Generate lifestyle product photography that places your items in authentic, aspirational contexts that your customers recognise.',
  },
  {
    slug: 'cinematic',
    label: 'Cinematic',
    category: 'style',
    heroTitle: 'Cinematic Product Photography',
    description:
      'Bold contrast, deep shadows, and a movie-quality aesthetic , generate cinematic product photography that turns your product into the hero of a visual story.',
  },
  {
    slug: 'ugc',
    label: 'UGC',
    category: 'style',
    heroTitle: 'UGC-Style Product Photography',
    description:
      'Raw, authentic, and scroll-native , generate UGC-style product photography that blends into social feeds, builds trust, and drives performance in paid and organic.',
  },
  {
    slug: 'creative',
    label: 'Creative',
    category: 'style',
    heroTitle: 'Creative Product Photography',
    description:
      'Break the mould with AI-generated creative product photography. Surreal compositions, unexpected props, and bold colour stories that make your brand impossible to ignore.',
  },
  {
    slug: 'minimalist',
    label: 'Minimalist',
    category: 'style',
    heroTitle: 'Minimalist Product Photography',
    description:
      'Less is more. Generate minimalist product photography with clean composition, negative space, and understated elegance that lets your product speak for itself.',
  },
  {
    slug: 'luxury',
    label: 'Luxury',
    category: 'style',
    heroTitle: 'Luxury Product Photography',
    description:
      'Opulent materials, refined lighting, and premium visual language , generate luxury-style product photography that commands premium pricing and brand prestige.',
  },
  {
    slug: 'outdoor',
    label: 'Outdoor',
    category: 'style',
    heroTitle: 'Outdoor Product Photography',
    description:
      'Natural light, open environments, and authentic outdoor contexts , generate outdoor product photography that resonates with adventure-seekers and nature-conscious shoppers.',
  },
  {
    slug: 'macro-detail',
    label: 'Macro Detail',
    category: 'style',
    heroTitle: 'Macro Detail Product Photography',
    description:
      'Reveal the texture, grain, and craftsmanship customers can\'t see in a standard shot. Generate macro-detail product photography that builds trust through transparency.',
  },
  {
    slug: 'dramatic-lighting',
    label: 'Dramatic Lighting',
    category: 'style',
    heroTitle: 'Dramatic Lighting Product Photography',
    description:
      'Hard light, deep shadows, and high contrast , generate dramatic lighting product photography that gives your product a powerful, confident visual identity.',
  },
  {
    slug: 'flatlay',
    label: 'Flatlay',
    category: 'style',
    heroTitle: 'Flatlay Product Photography',
    description:
      'Overhead, editorial, and perfectly arranged , generate flatlay product photography ideal for social media, gifting campaigns, and multi-product story telling.',
  },
]

export const allItems: SiloItem[] = [...industries, ...products, ...styles]

export function getItemBySlug(slug: string): SiloItem | undefined {
  return allItems.find((item) => item.slug === slug)
}

export function getAllSlugs(): string[] {
  return [...new Set(allItems.map((item) => item.slug))]
}
