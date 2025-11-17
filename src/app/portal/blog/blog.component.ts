import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Article {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	category: string;
	readTime: string;
	featured: boolean;
	content: string;
}

@Component({
	selector: "app-blog",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="blog">
			<h1>Blog & Resources</h1>
			<p class="description">
				Expert-written articles on child development, positioning strategies, and
				home therapy techniques
			</p>

			<div class="filters">
				<button
					*ngFor="let cat of categories"
					[class.active]="activeCategory === cat"
					(click)="activeCategory = cat"
					class="filter-btn">
					{{ cat === "" ? "All Articles" : cat }}
				</button>
			</div>

			<div class="featured-section" *ngIf="filteredFeatured.length > 0">
				<h2>Featured Articles</h2>
				<article *ngFor="let post of filteredFeatured" class="featured-post">
					<div class="featured-header">
						<div class="featured-content">
							<span class="featured-badge">⭐ Featured</span>
							<h3>{{ post.title }}</h3>
							<p class="featured-excerpt">{{ post.excerpt }}</p>
							<div class="featured-meta">
								<span class="category-badge">{{ post.category }}</span>
								<span class="read-time">{{ post.readTime }} read</span>
								<span class="date">{{ post.date }}</span>
							</div>
						</div>
					</div>
					<div class="featured-content-preview">
						<p>{{ post.content.substring(0, 200) }}...</p>
						<button class="btn btn-secondary">Read Full Article →</button>
					</div>
				</article>
			</div>

			<div class="blog-posts">
				<h2>{{ activeCategory === "" ? "All Articles" : activeCategory }}</h2>

				<article *ngFor="let post of filteredArticles" class="blog-post">
					<div class="post-header">
						<div>
							<span class="post-date">📅 {{ post.date }}</span>
							<h4>{{ post.title }}</h4>
						</div>
						<span class="read-time">⏱️ {{ post.readTime }}</span>
					</div>

					<p class="post-excerpt">{{ post.excerpt }}</p>

					<div class="post-footer">
						<span class="post-category">{{ post.category }}</span>
						<a href="#" class="read-more">Read More →</a>
					</div>
				</article>
			</div>

			<div class="resources-section">
				<h2>Research & Resources</h2>
				<p>
					Access peer-reviewed research and external resources on pediatric
					physical therapy and child development:
				</p>
				<div class="resource-list">
					<a href="https://pediatricpt.org" target="_blank" class="resource-link">
						<span>📚</span>
						<div>
							<p class="resource-title">Physical Therapy Evidence Research</p>
							<p class="resource-description">
								Access evidence-based interventions for children
							</p>
						</div>
					</a>
					<a href="https://zerotothree.org" target="_blank" class="resource-link">
						<span>👶</span>
						<div>
							<p class="resource-title">Zero to Three</p>
							<p class="resource-description">
								Early brain development resources for families
							</p>
						</div>
					</a>
					<a
						href="https://childdevevelopment.org"
						target="_blank"
						class="resource-link">
						<span>📖</span>
						<div>
							<p class="resource-title">Child Development Institute</p>
							<p class="resource-description">
								Comprehensive developmental information for parents
							</p>
						</div>
					</a>
					<a href="https://apta.org" target="_blank" class="resource-link">
						<span>🏥</span>
						<div>
							<p class="resource-title">American Physical Therapy Association</p>
							<p class="resource-description">
								Professional resources and best practices
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	`,
	styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
	activeCategory = "";

	categories = [
		"",
		"Development",
		"Positioning",
		"Exercises",
		"Safety",
		"Nutrition",
	];

	articles: Article[] = [
		{
			id: "tummy-time",
			title: "The Importance of Tummy Time",
			excerpt:
				"Discover why tummy time is crucial for your infant's physical development and how to make it enjoyable and beneficial.",
			date: "Nov 16, 2025",
			category: "Development",
			readTime: "5 min",
			featured: true,
			content:
				"Tummy time is one of the most important activities for your baby's development. Starting from the first days of life, supervised tummy time helps strengthen neck muscles, develop upper body strength, and prevents flat head syndrome. Begin with short sessions (2-5 minutes) and gradually increase as your baby becomes comfortable. Always supervise your baby and place them on a clean, flat surface.",
		},
		{
			id: "positions-to-avoid",
			title: "Positions to Avoid During Development",
			excerpt:
				"Learn which positions can hinder your child's development and discover safer alternatives for daily activities.",
			date: "Nov 10, 2025",
			category: "Positioning",
			readTime: "6 min",
			featured: true,
			content:
				"Certain positions, when used excessively, can limit your child's motor development. W-sitting (where legs form a W shape) can tighten hip muscles and limit movement. Instead, encourage cross-legged sitting or long-leg sitting. Avoid prolonged baby-wearing on one side, and vary positions throughout the day. Always consult your pediatrician if you're concerned about your child's positioning.",
		},
		{
			id: "gross-motor-milestones",
			title: "Understanding Gross Motor Milestones",
			excerpt:
				"A comprehensive guide to major gross motor developments and how to support your child's progress through play and activities.",
			date: "Nov 5, 2025",
			category: "Development",
			readTime: "8 min",
			featured: false,
			content:
				"Gross motor milestones follow a predictable pattern from birth to age 3. From lifting the head at 1-2 months to running and jumping by 24 months, each milestone builds on the previous one. Understanding what's typical helps you recognize delays early. However, remember that all children develop at their own pace within normal ranges.",
		},
		{
			id: "positioning-sleep",
			title: "Positioning Strategies for Better Sleep",
			excerpt:
				"Explore evidence-based positioning techniques that promote healthy sleep, reduce reflux symptoms, and support proper development.",
			date: "Oct 28, 2025",
			category: "Positioning",
			readTime: "5 min",
			featured: false,
			content:
				"Proper sleep positioning is vital for your baby's safety and development. Always place your baby on their back to sleep per safe sleep guidelines. During wake time, vary positions including tummy time, side-lying, and supported sitting. These variations prevent positional flatness and promote even development.",
		},
		{
			id: "fine-motor-play",
			title: "Fine Motor Development Through Play",
			excerpt:
				"Discover engaging games and activities that naturally develop your child's hand and finger coordination.",
			date: "Oct 20, 2025",
			category: "Exercises",
			readTime: "6 min",
			featured: false,
			content:
				"Fine motor skills develop gradually through play. Simple activities like reaching for toys, transferring objects between hands, and exploring different textures support development. By 6 months, babies should be reaching and grasping. By 12 months, they should use a pincer grasp (thumb and fingers). Make everyday activities fun learning opportunities.",
		},
		{
			id: "red-flags-check",
			title: "Red Flags in Development: When to Seek Help",
			excerpt:
				"Understand the signs that may indicate developmental concerns and what steps to take if you notice delays.",
			date: "Oct 15, 2025",
			category: "Safety",
			readTime: "7 min",
			featured: false,
			content:
				"Trust your instincts. If you notice your child isn't meeting milestones, seems to have unusual muscle tone, or shows regression, contact your pediatrician. Early intervention services are free for children under 3 in most states. Early identification and treatment can make a significant difference in outcomes.",
		},
		{
			id: "nutrition-development",
			title: "How Nutrition Supports Motor Development",
			excerpt:
				"Learn about key nutrients that support healthy brain and muscle development during infancy and early childhood.",
			date: "Oct 8, 2025",
			category: "Nutrition",
			readTime: "5 min",
			featured: false,
			content:
				"Proper nutrition is fundamental to development. Iron supports cognitive development, calcium and vitamin D support bone and muscle growth, and omega-3 fatty acids support brain development. Breast milk or formula provides these nutrients in the first months. As your baby transitions to solids, offer a variety of nutrient-dense foods.",
		},
		{
			id: "sensory-play-safety",
			title: "Safe Sensory Play for Different Ages",
			excerpt:
				"Create safe, developmentally-appropriate sensory experiences that support your child's learning and growth.",
			date: "Sep 30, 2025",
			category: "Safety",
			readTime: "6 min",
			featured: false,
			content:
				"Sensory play supports development, but safety is paramount. For infants, offer safe textures to explore. For toddlers, introduce water and sand play with supervision. Always ensure activities are age-appropriate and free from choking hazards. Sensory play builds neural connections while allowing your child to explore their world safely.",
		},
	];

	get filteredArticles(): Article[] {
		return this.articles.filter((article) => {
			const categoryMatch =
				this.activeCategory === "" ||
				article.category === this.activeCategory;
			return categoryMatch && !article.featured;
		});
	}

	get filteredFeatured(): Article[] {
		return this.articles.filter((article) => {
			const categoryMatch =
				this.activeCategory === "" ||
				article.category === this.activeCategory;
			return categoryMatch && article.featured;
		});
	}
}
