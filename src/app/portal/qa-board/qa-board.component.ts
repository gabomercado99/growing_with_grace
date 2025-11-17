import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface FAQ {
	id: string;
	category: string;
	question: string;
	answer: string;
	icon: string;
}

interface Post {
	id: string;
	author: string;
	content: string;
	date: string;
	replies: number;
	category: string;
}

@Component({
	selector: "app-qa-board",
	standalone: true,
	imports: [CommonModule, FormsModule],
	template: `
		<div class="qa-board">
			<h1>Family Q&A Board</h1>
			<p class="description">
				Connect with other families, get expert answers, and share your experiences
			</p>

			<div class="qa-section">
				<h2>Ask a Question</h2>
				<form class="question-form">
					<input
						type="text"
						placeholder="Your name (optional)"
						[(ngModel)]="authorName"
						name="author"
						class="form-input" />
					<select
						[(ngModel)]="selectedCategory"
						name="category"
						class="form-select">
						<option value="">Select a category...</option>
						<option value="Developmental">Developmental Concerns</option>
						<option value="Exercises">Exercise Tips</option>
						<option value="Products">Product Questions</option>
						<option value="General">General Questions</option>
					</select>
					<textarea
						placeholder="Ask your question here..."
						rows="4"
						[(ngModel)]="newQuestion"
						name="question"
						class="form-textarea">
					</textarea>
					<button
						type="button"
						class="btn btn-primary"
						(click)="submitQuestion()">
						Post Question
					</button>
				</form>
			</div>

			<div class="filters">
				<button
					*ngFor="let cat of categories"
					[class.active]="activeCategory === cat"
					(click)="activeCategory = cat"
					class="filter-btn">
					{{ cat === "" ? "All" : cat }}
				</button>
			</div>

			<div class="faq-section">
				<h2>Popular Questions & Answers</h2>

				<div
					*ngFor="let faq of filteredFAQs"
					class="faq-item"
					[class.expanded]="expandedFAQ === faq.id"
					(click)="expandedFAQ = expandedFAQ === faq.id ? '' : faq.id">
					<div class="faq-header">
						<div class="faq-title">
							<span class="icon">{{ faq.icon }}</span>
							<div>
								<p class="category">{{ faq.category }}</p>
								<h4>{{ faq.question }}</h4>
							</div>
						</div>
						<span class="expand-icon">{{ expandedFAQ === faq.id ? "−" : "+" }}</span>
					</div>
					<div *ngIf="expandedFAQ === faq.id" class="faq-answer">
						{{ faq.answer }}
					</div>
				</div>
			</div>

			<div class="recent-posts">
				<h2>Recent Community Posts</h2>

				<div *ngFor="let post of recentPosts" class="post-card">
					<div class="post-header">
						<span class="author">{{ post.author }}</span>
						<span class="category-badge">{{ post.category }}</span>
					</div>
					<p class="post-content">{{ post.content }}</p>
					<div class="post-meta">
						<span>💬 {{ post.replies }} replies</span>
						<span>📅 {{ post.date }}</span>
					</div>
				</div>
			</div>
		</div>
	`,
	styleUrls: ["./qa-board.component.scss"],
})
export class QABoardComponent {
	newQuestion = "";
	authorName = "";
	selectedCategory = "";
	activeCategory = "";
	expandedFAQ = "";

	categories = [
		"",
		"Developmental",
		"Exercises",
		"Products",
		"General",
	];

	faqs: FAQ[] = [
		{
			id: "when-start-pt",
			category: "Developmental",
			question:
				"When should my child start physical therapy?",
			answer:
				"Early intervention services are recommended for children showing delays in motor development, typically starting from birth to age 3. Signs that may warrant evaluation include not reaching developmental milestones, low muscle tone, coordination difficulties, or concerns raised by your pediatrician. Contact your local early intervention program for a free evaluation. Many conditions benefit significantly from early therapy, so don't hesitate to ask your pediatrician for a referral.",
			icon: "👶",
		},
		{
			id: "exercise-frequency",
			category: "Exercises",
			question: "How often should my child do home exercises?",
			answer:
				"The ideal frequency depends on your child's specific condition and age. Generally, 3-5 times per week is recommended for optimal results. However, some children may benefit from daily practice. Your physical therapist will provide specific recommendations based on your child's needs. Starting with 2-3 sessions per week and gradually increasing is often a good approach. Remember, consistency matters more than duration—shorter, regular sessions often work better than occasional long ones.",
			icon: "🏃",
		},
		{
			id: "home-exercises-safe",
			category: "Exercises",
			question:
				"Can I do therapy exercises at home without a professional?",
			answer:
				"Yes, you can! Our video interventions show exercises that families can safely perform at home. However, it's important to work with a professional first to understand your child's specific needs and to learn proper technique. A physical therapist will teach you how to recognize when your child is fatigued, how to avoid compensation patterns, and when to modify exercises. Always consult with a professional for your child's specific diagnosis and concerns before beginning a home exercise program.",
			icon: "🏠",
		},
		{
			id: "child-resistant",
			category: "Exercises",
			question:
				"What if my child doesn't like doing exercises?",
			answer:
				"Making therapy fun is key! Turn exercises into games and playtime. Use toys, music, and imaginative play. For example, crawling can become 'chasing the puppy,' and balance work can become 'walking on the moon.' Keep sessions short (15-20 minutes) and stop before your child gets overly tired. Celebrate progress with praise. Consistency and positive associations will help your child see exercise as fun rather than a chore.",
			icon: "🎮",
		},
		{
			id: "concern-delays",
			category: "Developmental",
			question:
				"What should I do if I'm concerned about developmental delays?",
			answer:
				"First, trust your instincts. If you notice delays in motor skills, communication, or social development, schedule an appointment with your pediatrician. Bring a list of specific concerns and milestones your child hasn't reached. Your pediatrician may refer you to a developmental specialist or early intervention program. Remember, early intervention is free for children under 3 in most states and can make a significant difference.",
			icon: "🚨",
		},
		{
			id: "red-flags",
			category: "Developmental",
			question:
				"What are red flags I should watch for?",
			answer:
				"At 3-6 months: weak head control, not following objects with eyes. At 6-9 months: not rolling over, not sitting with support. At 9-12 months: not crawling, not pulling to stand. At 12+ months: not walking or very limited language. Other concerns: very low or very high muscle tone, hand preference before 18 months, extreme toe-walking, or significant asymmetry in movement. Contact your pediatrician or early intervention program if you notice any of these.",
			icon: "⚠️",
		},
		{
			id: "products-recommendations",
			category: "Products",
			question:
				"Do I need to buy special equipment for home therapy?",
			answer:
				"Not necessarily! Many effective exercises use everyday items: pillows, blankets, toys, stairs, and furniture. However, some equipment like therapy balls, resistance bands, or foam mats can be helpful and affordable. Our Products page has curated recommendations from Amazon. Quality equipment doesn't have to be expensive. When starting out, try using household items first and add equipment only if you find you need it.",
			icon: "🛍️",
		},
		{
			id: "progress-tracking",
			category: "Exercises",
			question:
				"How do I track my child's progress?",
			answer:
				"Keep a simple log noting which exercises were completed, how your child responded, and any observations. Video is a great tool—record your child at intervals (monthly) doing the same activity so you can visually see improvements. Share videos with your physical therapist for feedback. Your therapist will also conduct formal assessments during visits. Progress may be subtle at first, but consistent practice leads to measurable improvements over weeks and months.",
			icon: "📊",
		},
		{
			id: "when-concerned-regression",
			category: "Developmental",
			question:
				"Should I be concerned if my child loses a skill?",
			answer:
				"Temporary regression can happen, especially during illness, stress, or major life changes. However, persistent loss of a previously mastered skill warrants evaluation. Common temporary causes include illness, pain, or developmental plateaus. Permanent regression in multiple areas is less common but should be discussed with your pediatrician. Document what you're seeing and share specific observations at your next appointment.",
			icon: "📈",
		},
	];

	recentPosts: Post[] = [
		{
			id: "post-1",
			author: "Maria T.",
			content:
				"Has anyone else noticed their child dragging one leg? When did you start noticing it and what helped? My 15-month-old has been doing this for about 3 weeks now.",
			date: "2 days ago",
			replies: 5,
			category: "Developmental",
		},
		{
			id: "post-2",
			author: "John D.",
			content:
				"Just started our home exercise routine! Any tips for getting an 18-month-old to cooperate with stretches? We're finding it hard to keep her engaged.",
			date: "1 week ago",
			replies: 8,
			category: "Exercises",
		},
		{
			id: "post-3",
			author: "Sarah L.",
			content:
				"The therapy ball recommendations from the products page were perfect! My 10-month-old loves bouncing on it and his balance has improved so much.",
			date: "1 week ago",
			replies: 3,
			category: "Products",
		},
		{
			id: "post-4",
			author: "David M.",
			content:
				"Question about gross motor milestones. My son is 9 months and not crawling yet, but he's starting to pull up on furniture. Should I be concerned?",
			date: "10 days ago",
			replies: 12,
			category: "Developmental",
		},
		{
			id: "post-5",
			author: "Emma K.",
			content:
				"The tummy time videos are amazing! We've been doing them daily and can already see improvements in my daughter's neck strength. Highly recommend!",
			date: "2 weeks ago",
			replies: 6,
			category: "Exercises",
		},
	];

	get filteredFAQs(): FAQ[] {
		if (this.activeCategory === "") {
			return this.faqs;
		}
		return this.faqs.filter((faq) => faq.category === this.activeCategory);
	}

	submitQuestion() {
		if (this.newQuestion.trim()) {
			alert("Thank you! Your question has been posted and will be reviewed by our team.");
			this.newQuestion = "";
			this.authorName = "";
			this.selectedCategory = "";
		}
	}
}
