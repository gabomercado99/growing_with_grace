import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Product {
	id: string;
	name: string;
	description: string;
	ageGroup: string;
	price: string;
	icon: string;
	amazonUrl: string;
	benefits: string[];
}

@Component({
	selector: "app-products",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="products">
			<h1>Recommended Products</h1>
			<p class="description">
				Shop our curated selection of therapy-approved items from Amazon. As an
				affiliate, we earn a small commission to support our mission.
			</p>

			<div class="products-grid">
				<div
					*ngFor="let product of products"
					class="product-card"
					[class.featured]="product.id === 'therapy-ball'">
					<div class="product-image">
						<span>{{ product.icon }}</span>
					</div>
					<div class="product-content">
						<h3>{{ product.name }}</h3>
						<p class="age-group">👶 Ages {{ product.ageGroup }}</p>
						<p class="description-short">{{ product.description }}</p>

						<div class="benefits">
							<p class="benefits-label">Benefits:</p>
							<ul>
								<li *ngFor="let benefit of product.benefits">
									{{ benefit }}
								</li>
							</ul>
						</div>

						<div class="product-footer">
							<p class="price">{{ product.price }}</p>
							<a
								[href]="product.amazonUrl"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-shop">
								View on Amazon
								<span class="external-icon">↗</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="note-box">
				<h3>📝 Affiliate Disclosure</h3>
				<p>
					Growing With Grace participates in the Amazon Associates program. We
					recommend products we believe will support your child's development.
					Purchasing through our links helps us continue providing free resources
					and guidance to families.
				</p>
			</div>
		</div>
	`,
	styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
	products: Product[] = [
		{
			id: "therapy-ball",
			name: "Inflatable Therapy Ball",
			description:
				"Multi-colored, durable therapy ball perfect for sitting balance and core strengthening exercises.",
			ageGroup: "6 months - 3 years",
			price: "$19.99 - $24.99",
			icon: "🎈",
			amazonUrl:
				"https://www.amazon.com/s?k=inflatable+therapy+ball+baby&i=sports-outdoors",
			benefits: [
				"Improves core strength",
				"Develops balance",
				"Increases proprioceptive awareness",
			],
		},
		{
			id: "foam-roller-kit",
			name: "Pediatric Foam Roller Set",
			description:
				"Soft foam rollers in various shapes for myofascial release and sensory input.",
			ageGroup: "3 months - 4 years",
			price: "$22.99 - $28.99",
			icon: "🛼",
			amazonUrl:
				"https://www.amazon.com/s?k=pediatric+foam+roller&i=sporting-goods",
			benefits: [
				"Muscle tension relief",
				"Sensory stimulation",
				"Mobility improvement",
			],
		},
		{
			id: "play-mat",
			name: "Waterproof Foam Play Mat",
			description:
				"Thick, cushioned, washable foam mat with colorful design for safe floor exercises and tummy time.",
			ageGroup: "Birth - 3 years",
			price: "$29.99 - $39.99",
			icon: "🧩",
			amazonUrl:
				"https://www.amazon.com/s?k=waterproof+foam+play+mat+baby&i=baby-products",
			benefits: [
				"Safe exercise surface",
				"Easy to clean",
				"Portable and foldable",
			],
		},
		{
			id: "stacking-cups",
			name: "Nesting & Stacking Cups",
			description:
				"Colorful, lightweight cups for fine motor practice, water play, and cognitive development.",
			ageGroup: "6 months - 3 years",
			price: "$8.99 - $12.99",
			icon: "🥤",
			amazonUrl:
				"https://www.amazon.com/s?k=stacking+cups+baby+nesting&i=baby-products",
			benefits: [
				"Fine motor development",
				"Hand-eye coordination",
				"Cause and effect learning",
			],
		},
		{
			id: "resistance-bands",
			name: "Therapy Resistance Bands",
			description:
				"Soft, colored resistance bands perfect for strengthening exercises and movement games.",
			ageGroup: "12 months - 5 years",
			price: "$12.99 - $18.99",
			icon: "🎀",
			amazonUrl:
				"https://www.amazon.com/s?k=therapy+resistance+bands+kids&i=sporting-goods",
			benefits: [
				"Muscle strengthening",
				"Proprioceptive feedback",
				"Exercise variety",
			],
		},
		{
			id: "push-toy",
			name: "Interactive Push/Pull Toy",
			description:
				"Durable push or pull toy with sounds and lights to encourage cruising and early walking.",
			ageGroup: "9 months - 2 years",
			price: "$24.99 - $34.99",
			icon: "🚗",
			amazonUrl:
				"https://www.amazon.com/s?k=baby+push+toy+sounds+lights&i=baby-products",
			benefits: [
				"Encourages walking",
				"Strengthens legs",
				"Auditory and visual stimulation",
			],
		},
	];
}
