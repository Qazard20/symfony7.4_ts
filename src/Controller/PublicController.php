<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PublicController extends AbstractController
{
    #[Route('/', name: 'app_landing', methods: ['GET'], options: ['expose' => true])]
    public function renderLandingPage(): Response
    {
        return $this->render('pages/public.html.twig', [
            'pageName' => 'home',
        ]);
    }

    #[Route('/page/{slug}', name: 'app_public_page', methods: ['GET'], options: ['expose' => true])]
    public function renderPublicPage($slug): Response
    {
        $existingRoutes = [
            'about'
        ];

        foreach ($existingRoutes as $route) {
            if ($slug === $route) {
                return $this->render('pages/public.html.twig', [
                    'pageName' => $route,
                ]);
            }
        }
    }

    #[Route('/register', name: 'app_register', methods: ['GET'], options: ['expose' => true])]
    #[Route('/login', name: 'app_login', methods: ['GET'], options: ['expose' => true])]
    public function renderLoginPage(): Response
    {
        return $this->render('pages/public.html.twig', [
            'pageName' => 'home',
        ]);
    }
}
