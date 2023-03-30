<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stripe = new \Stripe\StripeClient('sk_test_51MlwU6Bmw8RrKpV2vfGJHuduwPlgEDYHg2ygigjXVCdrDAWPQ481LC3izvwWluXhWvG9zxN7QoPvk4zfgQcl1DQa00623QQzup');

        $order = Order::where('user_id', '=', auth()->user()->id)
            ->where('payment_intent', null)
            ->first();

        $intent = $stripe->paymentIntents->create([
            'amount' => (int) $order->total,
            'currency' => 'usd',
            'payment_method_types' => ['card'],
        ]);

        return Inertia::render('Checkout', [
            'intent' => $intent,
            'order' => $order
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $res = Order::where('user_id', '=', auth()->user()->id)
            ->where('payment_intent', null)
            ->first();

        if (!is_null($res)) {
            $res->total = $request->total;
            $res->total_decimal = $request->total_decimal;
            $res->items = json_encode($request->items);
            $res->save();
        } else {
            $order = new Order();
            $order->user_id = auth()->user()->id;
            $order->total = $request->total;
            $order->total_decimal = $request->total_decimal;
            $order->items = json_encode($request->items);
            $order->save();
        }

        return redirect()->route('checkout.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $order = Order::where('user_id', '=', auth()->user()->id)
            ->where('payment_intent', null)
            ->first();
        $order->payment_intent = $request['payment_intent'];
        $order->save();

        Mail::to($request->user())->send(new OrderShipped($order));

        return redirect()->route('checkout_success.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
